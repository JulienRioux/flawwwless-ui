import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from "../MenuItem";
import styles from "./Menu.css";

class Menu extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		style: PropTypes.object
	}
	static Item = Item;

	state = {
		selectedItem: this.props.selectedItem
	}

	changeState = (uniqueKey) => {
		// Change the selectedItem in the state
		this.setState({ selectedItem: uniqueKey });
	}

	componentDidUpdate(prevProps){
		// Change the selected item if it have changed in the app state!
		if(this.props.selectedItem !== prevProps.selectedItem){
			this.setState({ selectedItem: this.props.selectedItem });
		}
	}

	render(){
		const { children } = this.props;
		const { selectedItem } = this.state;
		// Pass props to children
		const childrenWithProps = React.Children.map(children, child => {
			// Check if its the selected menu item or not to create the component
			if(child.props.uniqueKey === selectedItem){
				return React.cloneElement(child, {
					changeState: this.changeState,
					isSelected: true
				});
			}
			return React.cloneElement(child, {
				changeState: this.changeState,
				isSelected: false
			});
		}

		);
		return (
			<div
				style={ this.props.style }
				className={ `${ styles.menuDiv } ${ this.props.className }` } >
			  { childrenWithProps }
			</div>
		)
	}
}

export default Menu;
