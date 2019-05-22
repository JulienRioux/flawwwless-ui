import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.scss";
import Icon from "../Icon";

class Button extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		round: PropTypes.boolean,
	}

	buttonClicked = (e) => {
		e.persist();
		this.props.onClick && this.props.onClick();
	}

	render(){
		const { children, type, round, outlined, loading } = this.props;
		let typeStyle = "";
		if(type === "primary"){
			typeStyle = styles.btnPrimary;
		} else if(type === "success"){
			typeStyle= styles.btnSuccess;
		} else if(type === "danger"){
			typeStyle= styles.btnDanger;
		}

		let roundedClass = "";
		if(round){
			roundedClass = styles.btnRounded
		}

		if(outlined){
			console.log("OUTLINED");
			if(type === "primary"){
				typeStyle = styles.btnOutlinedPrimary;
			} else if(type === "success"){
				typeStyle = styles.btnOutlinedSuccess;
			} else if(type === "danger"){
				typeStyle= styles.btnOutlinedDanger;
			} else {
				typeStyle= styles.btnOutlined;
			}
		}

		let loadingBtn = "";
		let loadingIconColor = "#fff";
		if(loading){
			loadingBtn = styles.loadingBtn;
			if(!type){
				loadingIconColor = "#5f6368";
			}
		}

		return (
			<button
			  onClick={ this.buttonClicked }
			  className={`${ styles.btn } ${ typeStyle } ${ roundedClass } ${ loadingBtn }`}>
				{ loading ? (
					<Icon color={ loadingIconColor } size="1.5rem" type="loader" />
				) : (
					children
				) }
			</button>
		)
	}
}

export default Button;
