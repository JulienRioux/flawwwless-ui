import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.css";

class Button extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		round: PropTypes.string
	}

	buttonClicked = (e) => {
		e.persist();
		this.props.onClick && this.props.onClick();
	}

	render(){
		const { children, type, round } = this.props;
		let typeStyle = "";
		if(type === "primary"){
			typeStyle = styles.btnPrimary;
		} else if(type === "success"){
			typeStyle= styles.btnSuccess;
		} else if(type === "danger"){
			typeStyle= styles.btnDanger;
		}

		let roundedClass = "";
		if(round === "true"){
			roundedClass = styles.btnRounded
		}

		return (
			<button
			  onClick={ this.buttonClicked }
			  className={`${ styles.btn } ${ typeStyle } ${ roundedClass }`}>{ children }</button>
		)
	}
}

export default Button;
