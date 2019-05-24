import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.scss";
import Icon from "../Icon";
import uid from "uid";


class Input extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
		icon: PropTypes.string,
	}

	state = {
		inputId: `input_${ uid(10) }`,
		fontSize: null,
		iconIsReady: false,
	}

	componentDidMount(){
		// Get the necessary padding if the input have an icon
		if(this.props.icon){
			const element = document.getElementById(this.state.inputId);
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
	}

	render(){
		let { placeholder, type, className, icon } = this.props;
		const { fontSize, iconIsReady } = this.state;

		className = className ? className : "";

		const inputWithIcon = icon ? styles.inputWithIcon : "";

		// // Check if there is a specified font size (to have the right icon size)
		let specifiedFontSize = null;
		if(icon){
			if(this.props.style){
				specifiedFontSize = this.props.style.fontSize;
				console.log("=>", specifiedFontSize);
				console.log("*>", fontSize);
			}
		}


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
					className={ `${ className } ${ inputWithIcon }` }
					style={{
						...this.props.style,
						paddingLeft: `${ `calc(${ fontSize } * 1.5)` }`,
					}}
				/>

				{
					icon && (
						<span
							style={{
								paddingTop: `${ `calc(${ fontSize } * 0)` }`,
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

export default Input;
