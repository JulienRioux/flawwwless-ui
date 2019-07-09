import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from "./Drawer.scss";
import Icon from "../Icon";
import uid from "uid";


class DrawerPortal extends Component {
	static propTypes = {
		columns: PropTypes.array,
		rows: PropTypes.array,
	}

	state = {
		showDrawer: false,
		drawerId: "drawer_" + uid(10),
		drawerOverlayId: "drawerOverlay_" + uid(10),
		isClosing: false,
	}

	closeDrawer = async () => {
		const { showDrawer } = this.props;

		if(!this.state.isClosing){
			// Check if the drawer is already closing
			await this.setState({ isClosing: true });
			// add animation depending if it's a right or left drawer
			setTimeout(async () => {
				await this.setState({
					showDrawer,
				  isClosing: false,
			  });
			}, 300);

			const selectedDrawer = document.querySelector(`#${ this.state.drawerId }`);
			if(selectedDrawer){
				if(this.props.position === "right"){
					selectedDrawer.className = `${ styles.drawer } ${ styles.drawerOutRight }`;
				} else {
					selectedDrawer.className = `${ styles.drawer } ${ styles.drawerOut }`;
				}
				document.querySelector(`#${ this.state.drawerOverlayId }`).className = `${ styles.drawerOverlay } ${ styles.drawerOverlayOut }`;
			}
		}
	}

	componentDidMount(){
		const { showDrawer } = this.props;
		this.setState({ showDrawer });
	}

	componentDidUpdate(prevProps){
		const { showDrawer } = this.props;
		// Add an animation to the drawer on close
		if(showDrawer !== prevProps.showDrawer){
			if(!showDrawer){
				this.closeDrawer();
			} else {
				this.setState({ showDrawer });
			}
		}
	}

	render(){
		// Check whether if the drawer is at left (default) or at right
		const drawerPositionClass = this.props.position === "right" ? styles.drawerWrapperRight : styles.drawerWrapper;
		const drawerClass = this.props.position === "right" ? `${ styles.drawer } ${ styles.drawerRight }` : styles.drawer;

		return (
			this.state.showDrawer && (
				<div>
					<div
						className={ drawerPositionClass }
					>
						<div
							id={ this.state.drawerId }
							style={ this.props.style }
							className={ drawerClass } >
							{
								this.props.isClosable && (
									<button
										className={ styles.closeDrawer }
										onClick={ this.props.toggleDrawer }>
										<Icon
											type="close"
											size="1.6rem"
											className={ styles.closeDrawerIcon } />
									</button>
								)
							}

							{ this.props.children }
						</div>

					  <div
							id={ this.state.drawerOverlayId }
							onClick={ this.props.toggleDrawer }
							className={ styles.drawerOverlay }></div>
					</div>

					<div className={ styles.drawerBlockClick }></div>
				</div>
			)
		)
	}
}

DrawerPortal.defaultProps = {
	isClosable: true,
}


// Create a portal to hook the Drawer into
const Drawer = (props) => {
	// Check if the portal-root div exist
	let portalRoot = document.getElementById("portal-root");
	// if not, add it to the body
	if(!portalRoot){
		const portalRoot = document.createElement("div");
		portalRoot.id = "portal-root";
		document.body.appendChild(portalRoot);
	}
	// Create a portal to attach the drawer
	return ReactDOM.createPortal(
		<DrawerPortal {...props} />,
		document.getElementById("portal-root")
	)
}

export default Drawer;
