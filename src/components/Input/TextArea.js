import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.scss";
import Icon from "../FlwwwIcon";
import styled from "styled-components";
import { primaryColor } from "../../styles";

import ThemeContext from "../../context/themeContext";


class TextArea extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
	}

	render(){
		const { placeholder, type } = this.props;
		const className = "";

		return (
			<ThemeContext.Consumer>
				{ context => {
					// Get the right style for the textarea
					let mainColor = primaryColor;

					// Check if there is an existing context (custom theming)
					if(context){
						mainColor = context.primaryColor;
					}

					const CustomTextArea = styled.textarea`
						:focus {
							border-color: ${ mainColor } !important;
						}
						:active {
							border-color: ${ mainColor } !important;
						}
					`;

					return (
						<span className={ styles.inputWrapper }>
							<CustomTextArea
								{ ...this.props }
								className={ `${ styles.textInput } ${ className }` }
							/>
						</span>
					)


				} }
			</ThemeContext.Consumer>
		)
	}
}

export default TextArea;
