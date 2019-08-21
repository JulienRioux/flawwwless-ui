import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.scss";
import Icon from "../FlwwwIcon";
import getBtnStyle from "./getBtnStyle";

import ThemeContext from "../../context/themeContext";


class Button extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		// round: PropTypes.boolean,
	}

	buttonClicked = (e) => {
		// Get the button onClick action done
		e.persist();
		this.props.onClick && this.props.onClick();
	}

	render(){
		const { children, type, round, outlined, loading, colors, disabled } = this.props;

		// Get the button style (rounded, outlined or loading)
		let typeStyle = "";
		let roundedClass = "";

		if(round){
			roundedClass = styles.btnRounded
		}

		if(outlined){
			typeStyle= styles.btnOutlined;
		}

		let loadingBtn = "";
		if(loading){
			loadingBtn = styles.loadingBtn;
		}

		let disabledBtn = "";
		if(disabled){
			disabledBtn = styles.disabledBtn;
		}

		return (
				<ThemeContext.Consumer>
					{ context => {
						// Get the right style for the button (Check if it's a custom theme)
						const CustomButton = getBtnStyle(type, outlined, context, colors);

						return (
							<CustomButton
								{ ...this.props }
								onClick={ this.buttonClicked }
								className={`${ styles.btn } ${ typeStyle } ${ roundedClass } ${ loadingBtn } ${ disabledBtn }`}>
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
