import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.scss";
import Icon from "../Icon";
import getBtnStyle from "./getBtnStyle";

import ThemeContext from "../../context/themeContext";


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
		const { children, type, round, outlined, loading, colors } = this.props;

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
		if(loading){
			loadingBtn = styles.loadingBtn;
		}

		return (
				<ThemeContext.Consumer>
					{ context => {
						// Get the right style for the button
						const CustomButton = getBtnStyle(type, outlined, context, colors);

						return (
							<CustomButton
								{ ...this.props }
								onClick={ this.buttonClicked }
								className={`${ styles.btn } ${ typeStyle } ${ roundedClass } ${ loadingBtn }`}>
								<span style={{ opacity: loading ? 0 : 1 }}>
									{ children }
								</span>
								{ loading && (
									<span className={ styles.loadingBtnIcon }>
										<Icon type="loader" />
									</span>
								) }
							</CustomButton>
						)
					} }
				</ThemeContext.Consumer>
		)
	}
}

export default Button;
