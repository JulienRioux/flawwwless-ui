import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import Button from "../Button";
import styles from "./Modal.css";
import CloseIcon from "../../icons/CloseIcon.svg";

class Modal extends Component {
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.node.isRequired,
		border: PropTypes.string,
		extra: PropTypes.node,
	}

	// Make the opacity disseapear before closing the modal
	closeModal = () => {
		setTimeout(() => {
			this.props.toggleModal();
			// document.querySelector("#modalOverlay").className = `${ styles.modalOverlay } ${ styles.hide }`;
		}, 300);
		// this.props.toggleModal();
		document.querySelector("#modalOverlay").className = `${ styles.modalOverlay } ${ styles.hide }`;
		document.querySelector("#modal").className = `${ styles.modal } ${ styles.hide }`;
	}

	componentDidMount(){
		setTimeout(() => {
			document.querySelector("#modalOverlay").className = styles.modalOverlay;
			document.querySelector("#modal").className = styles.modal;
		}, 10);
		// console.log(document.querySelector("#modal"));
	}

	render(){
		const { border, children, toggleModal } = this.props;
		let { extra, title } = this.props;

		return(
			<div>
			  <div id="modalOverlay" onClick={ this.closeModal } className={ `${styles.modalOverlay} ${styles.hide}` }></div>
				<div id="modal" className={ styles.modal }>
					<Card
					  title={ title }
					  border="shadow">
						<button onClick={ this.closeModal } className={ styles.closeModal }>
							<img src={ CloseIcon } className={ styles.closeIcon } alt=""/>
						</button>
						{ children }
					</Card>
				</div>
			</div>
		)
	}
}

export default Modal;
