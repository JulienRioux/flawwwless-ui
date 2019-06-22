import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Button from "../Button";
import styles from "./Modal.scss";
import InnerModal from "./InnerModal";


class ModalPortal extends Component {
	state = {
		isVisible: false,
	}

	componentDidMount(){
		this.setState({ isVisible: this.props.isVisible });
	}

	componentDidUpdate(prevProps){
		if(this.props.isVisible !== prevProps.isVisible){

			if(this.props.isVisible){
				this.setState({ isVisible: true });
			} else {
				this.child.addCloseAnimation();
				setTimeout(() => {
					this.setState({ isVisible: false });
				}, 300);
			}
		}
	}

	render(){
		return (
			this.state.isVisible ? (
				<div>
					<InnerModal
						title={ this.props.title }
						onRef={ref => (this.child = ref)}
						isVisible={ this.props.isVisible }
						toggleModal={ this.props.toggleModal }>
						{ this.props.children }
					</InnerModal>
				</div>
			) : null
		)
	}
}

const Modal = (props) => {
	// Check if the portal-root div exist
	let portalRoot = document.getElementById("portal-root");
	// if not, add it to the body
	if(!portalRoot){
		const portalRoot = document.createElement("div");
		portalRoot.id = "portal-root";
		document.body.appendChild(portalRoot);
	}
	// Create a portal
	return ReactDOM.createPortal(
		<ModalPortal {...props} />,
		document.getElementById("portal-root")
	)
}

export default Modal;
