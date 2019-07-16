import React, { Component } from 'react';
import styles from "./Modal.scss";
import PropTypes from 'prop-types';
import Card from "../Card";
import Icon from "../Icon";

class InnerModal extends Component {
	state = {
		isVisible: false,
		isClosing: false,
	}

	// Make the opacity disseapear before closing the modal
	closeModal = (fromWrapper = false) => {
		// Add animation on close
		this.setState({ isClosing: true });
		setTimeout(() => {
			this.props.toggleModal();
			this.props.finishedClose();
		}, 300);
		this.addCloseAnimation();
	}

	addCloseAnimation = () => {
		document.querySelector("#modalOverlay").className = `${ styles.modalOverlay } ${ styles.hide }`;
		document.querySelector("#modal").className = `${ styles.modal } ${ styles.hideModal }`;
	}


	// This could be added later if fixing the problem => A bug happen when you click on close and you push on the esc button while the animation of the modal closing is finished !!!!!
	// escFunction = (e) => {
	// 	// prevent if the user is clicking and pressing on esc button
	// 	if(e.keyCode === 27){
	// 		this.closeModal();
	// 	}
  // }

	componentDidMount(){
		this.props.onRef(this);
		setTimeout(() => {
			document.querySelector("#modalOverlay").className = styles.modalOverlay;
			document.querySelector("#modal").className = styles.modal;
		}, 10);
		// Add escape key event to close the modal
		// document.addEventListener("keydown", this.escFunction, false);
		this.setState({
			isVisible: this.props.isVisible
		});
	}

	componentDidUpdate(prevProps){
		// Check if the modal visibility changed
		if(this.props.isVisible !== prevProps.isVisible){
			this.closeModal();
		}
	}

	componentWillUnmount(){
    // document.removeEventListener("keydown", this.escFunction, false);
		this.props.onRef(undefined);
  }

	render(){
		const { border, children, isVisible } = this.props;
		let { extra, title } = this.props;

		return(
			<div>
			  <div id="modalOverlay" onClick={ this.closeModal } className={ `${ styles.modalOverlay } ${ styles.hide }` }></div>

				<div id="modal" className={ styles.modal }>
					<Card
						title={ title }
						border="none">
						<button onClick={ this.closeModal } className={ styles.closeModal }>
							<Icon
								type="close"
								size="24px"
								className={ styles.closeIcon } />
						</button>
						{ children }
					</Card>
				</div>
			</div>
		)
	}
}


export default InnerModal;
