import React, { Component } from 'react';
import ThemeContext from "../../context/themeContext";
import {
	defaultColor,
	defaultTextColor,
	primaryColor,
	primaryTextColor,
	successColor,
	successTextColor,
	dangerColor,
	dangerTextColor,
} from "../../styles";


class ThemeProvider extends Component {
	static contextType = ThemeContext;

	state = {
		defaultColor: this.props.theme.defaultColor || defaultColor,
		defaultTextColor: this.props.theme.defaultTextColor || defaultTextColor,
		primaryColor: this.props.theme.primaryColor || primaryColor,
		primaryTextColor: this.props.theme.primaryTextColor || primaryTextColor,
		successColor: this.props.theme.successColor || successColor,
		successTextColor: this.props.theme.successTextColor || successTextColor,
		dangerColor: this.props.theme.dangerColor || dangerColor,
		dangerTextColor: this.props.theme.dangerTextColor || dangerTextColor,
	}


	render(){
		const {
			defaultColor,
			defaultTextColor,
			primaryColor,
			primaryTextColor,
			successColor,
			successTextColor,
			dangerColor,
			dangerTextColor,
	 } = this.state;

		return (
			<ThemeContext.Provider value={{
				defaultColor: defaultColor,
				defaultTextColor: defaultTextColor,
				primaryColor: primaryColor,
				primaryTextColor: primaryTextColor,
				successColor: successColor,
				successTextColor: successTextColor,
				dangerColor: dangerColor,
				dangerTextColor: dangerTextColor,
			}}>
			  { this.props.children }
			</ThemeContext.Provider>
		)
	}
}

export default ThemeProvider;
