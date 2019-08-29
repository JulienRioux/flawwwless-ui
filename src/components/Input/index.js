import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.scss";
// import Icon from "../FlwwwIcon";
import Icon from "../NewIcon";
import uid from "uid";
import { primaryColor } from "../../styles";
import GetContext from "../GetContext";

import ThemeContext from "../../context/themeContext";

const errorColor = "#ff2a2a";


class Input extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
		icon: PropTypes.string,
	}

	state = {
		inputId: "input_" + uid(10),
		fontSize: null,
		iconIsReady: false,
	}

	componentDidMount(){
		// get the primary color from the context
		const { primaryColor } = this.props.context;
		const element = document.getElementById(this.state.inputId);
		// Get the necessary padding if the input have an icon
		if(this.props.icon){
			// const element = document.getElementById(this.state.inputId);
			const elementStyle = getComputedStyle(element);
			// Get the font size if there is no size specified
			const fontSize = elementStyle["font-size"];
			this.setState({
				fontSize,
				iconIsReady: true
			});
		} else {
			this.setState({ iconIsReady: true });
		}

		// Add a box styling on focus
		element.addEventListener("focus", (e) => {
			// e.target.style.boxShadow = `0 0 0 3px ${ this.props.mainColor }40`;
			element.style.borderColor = `${ primaryColor }`;
		});
		// Remove the styling when the user doesn't focus anymore
		element.addEventListener("blur", (e) => {
		  // e.target.style.boxShadow = "";
			e.target.style.borderColor = "";
			e.target.style.backgroundColor = "";
		});

		if(this.props.autoFocus){
			// Make work the autoFocus properly
			// element.style.boxShadow = `0 0 0 3px ${ this.props.mainColor }40`;
			element.style.borderColor = `${ primaryColor }`;
		}
	}

	render(){
		let { placeholder, type, className, icon, error } = this.props;
		const { fontSize, iconIsReady } = this.state;
		// Add the classNAme to the icon
		className = className ? className : "";
		// Check if it's an input with icon and add style if its the case
		const inputWithIcon = icon ? styles.inputWithIcon : "";

		// // Check if there is a specified font size (to have the right icon size)
		let specifiedFontSize = null;
		if(icon){
			if(this.props.style){
				specifiedFontSize = this.props.style.fontSize;
			}
		}

		// Change the styling if it receive the error props
		let errorClass = this.props.error ? styles.inputError : "";


		return (
			<span
				style={{
					fontSize: specifiedFontSize,
					// opacity: iconIsReady ? 1 : 0,
				}}
				className={ styles.inputWrapper }>
				<input
					{ ...this.props }
					id={ this.state.inputId }
					className={ `${ className } ${ inputWithIcon } ${ styles.input } ${ errorClass }` }
					style={{
						...this.props.style,
						paddingLeft: `${ `calc(${ fontSize } * 1.4 + 5px)` }`,
					}}
				/>

				{
					icon && (
						<span
							style={{
								fontSize: fontSize,
							}}
							className={ styles.inputIcon }>
							<Icon
								type={ icon }
							/>
						</span>
					)
				}
			</span>
		)
	}
}


export default GetContext(Input);
