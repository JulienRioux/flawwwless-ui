import styled from "styled-components";
import Colr from "colr";

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

// This function put the right button styling
const getBtnStyle = (type, outlined, context, colors) => {

	// init some variables
	let mainColor;
	let color;

	// Check first if there is a custom theme
	if(context){
		// Check if the button is a primary btn
		if(type === "primary"){
			mainColor = context.primaryColor || primaryColor;
			color = context.primaryTextColor || primaryTextColor;
		}
		// Check if the button is a success btn
		else if(type === "success"){
			mainColor = context.successColor || successColor;
			color = context.successTextColor || successTextColor;
		}
		// Check if the button is a danger btn
		else if(type === "danger"){
			mainColor = context.dangerColor || dangerColor;
			color = context.dangerTextColor || dangerTextColor;
		}
		// otherwise it's a default button
		else {
			mainColor = context.defaultColor || defaultColor;
			color = context.defaultTextColor || defaultTextColor;
		}
	}

	// Default value if there is no context (no custom theming)
	else {
		if(type === "primary"){
			mainColor = primaryColor;
			color = primaryTextColor;
		}
		// Check if the button is a success btn
		else if(type === "success"){
			mainColor = successColor;
			color = successTextColor;
		}
		// Check if the button is a danger btn
		else if(type === "danger"){
			mainColor =  dangerColor;
			color = dangerTextColor;
		}
		// otherwise it's a default button
		else {
			mainColor = defaultColor;
			color = defaultTextColor;
		}
	}

	// Set the default value if it's a custom colored button
	if(colors){
		mainColor = colors.mainColor || defaultColor;
		color = colors.secondColor || defaultTextColor;
	}

	// init the CustomButton object
	let CustomButton;

	// Style the outlined buttons
  if(outlined){
		CustomButton = styled.button`
			background-color: none;
			color: ${ mainColor };
			outline: 0;

			:hover {
		    background-color: ${ mainColor }15;
		  }

			:focus {
				background-color: none;
				box-shadow: 0 0 0 2.5px ${ mainColor }66;
			}

			:-moz-focusring {
				background-color: none;
				box-shadow: 0 0 0 2.5px ${ mainColor }66;
			}

			:active {
				background-color: ${ mainColor }33;
			}
		`;
	}
	// style the normal buttons
	else {
		CustomButton = styled.button`
			background-color: ${ mainColor };
			color: ${ color };
			outline: 0;

			:hover {
		    background-color: ${ lightenDarkenColor(mainColor, 7) };
		  }

			:focus {
				background-color: ${ mainColor };
				box-shadow: 0 0 0 2.5px ${ mainColor }66;
			}

			:-moz-focusring {
				background-color: none;
				box-shadow: 0 0 0 2.5px ${ mainColor }66;
			}

			:active {
				background-color: ${ lightenDarkenColor(mainColor, -4) };
			}
		`;
	}

	return CustomButton;
}

const lightenDarkenColor = (col, amt) => {
	// Darken or lighten color function
	// To add the darker on hover, just multiply amt by -1!!!
	var colr = new Colr();
	colr = colr.fromHex(col).lighten(amt).toHex();

	return colr;
}


export default getBtnStyle;
