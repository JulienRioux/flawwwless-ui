import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import Button from "../Button";
import styles from "./Modal.scss";
import Icon from "../Icon";

class Modal extends Component {
	static propTypes = {
		title: PropTypes.string,
		isVisible: PropTypes.boolean,
		children: PropTypes.node.isRequired,
		border: PropTypes.string,
		extra: PropTypes.node,
	}

	state = {
		isVisible: false,
	}

	// Make the opacity disseapear before closing the modal
	closeModal = (fromWrapper=false) => {
		setTimeout(() => {
			this.props.toggleModal();
			// document.querySelector("#modalOverlay").className = `${ styles.modalOverlay } ${ styles.hide }`;
		}, 300);
		// this.props.toggleModal();
		this.addCloseAnimation();
	}

	addCloseAnimation = () => {
		document.querySelector("#modalOverlay").className = `${ styles.modalOverlay } ${ styles.hide }`;
		document.querySelector("#modal").className = `${ styles.modal } ${ styles.hideModal }`;
	}

	escFunction = (e) => {
    if(e.keyCode === 27) {
      this.closeModal();
    }
  }

	componentDidMount(){

		this.props.onRef(this);

		setTimeout(() => {
			document.querySelector("#modalOverlay").className = styles.modalOverlay;
			document.querySelector("#modal").className = styles.modal;
		}, 10);
		// Add escape key event to close the modal
		document.addEventListener("keydown", this.escFunction, false);
		this.setState({ isVisible: this.props.isVisible });
	}

	componentDidUpdate(prevProps){
		// console.log(this.props.isVisible, prevProps.isVisible);
		if(this.props.isVisible !== prevProps.isVisible){
			this.setState({ isVisible: this.props.isVisible });
		}
	}

	componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);

		this.props.onRef(undefined);
  }

	render(){
		const { border, children, isVisible } = this.props;
		let { extra, title } = this.props;

		console.log("TITLE:", this.props);

		return(
			<div>
			  <div id="modalOverlay" onClick={ this.closeModal } className={ `${ styles.modalOverlay } ${ styles.hide }` }></div>
				<div id="modal" className={ styles.modal }>
					<Card
					  title={ title }
					  border="shadow">
						<button onClick={ this.closeModal } className={ styles.closeModal }>
							<Icon
								type="close"
								size="1.6rem"
								className={ styles.closeIcon } />
						</button>
						{ children }
					</Card>
				</div>
			</div>
		)
	}
}

class ModalWrapper extends Component {
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
					<Modal
						title={ this.props.title }
						onRef={ref => (this.child = ref)}
						isVisible={ this.props.isVisible }
						toggleModal={ this.props.toggleModal }>
						{ this.props.children }
					</Modal>
				</div>
			) : null
		)
	}
}



export default ModalWrapper;
