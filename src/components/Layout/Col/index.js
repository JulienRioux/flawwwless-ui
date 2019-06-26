import React from "react";
import styled from "styled-components";
import formatColStyle from "./formatColStyle";
import { gutterSize } from "../layoutParams";

const Col = (props) => {

	// Default styling for any col
	const colStyle = `
		position: relative;
	  width: 100%;
	  padding-right: ${ gutterSize };
	  padding-left: ${ gutterSize };
	`;

	// Format the right width for the cols
	let colClass;
	if(props.grid){
		colClass = props.grid.split(" ");
	}

	// Setup some variables for media queries
	const smallDevice = "576px";
	const mediumDevice = "768px";
	const largeDevice = "992px";
	const xlDevice = "1200px";

	// add the grid style to the div
	let gridStyle = "";
	colClass.forEach(cls => {
		// get the percent or the width
		const classArray = cls.split("-");
		const prcntWidth = 100 / 12 * classArray[classArray.length-1];

		// Check if it contain media queries grid
		// SMALL DEVICES
		if(cls.split("-").includes("sm")){
			gridStyle += formatColStyle(cls, smallDevice, prcntWidth);
		}
		// MEDIUM DEVICE
		else if(cls.split("-").includes("md")){
			gridStyle += formatColStyle(cls, mediumDevice, prcntWidth);
		}
		// LARGE DEVICE
		else if(cls.split("-").includes("lg")){
			gridStyle += formatColStyle(cls, largeDevice, prcntWidth);
		}
		// XL DEVICE
		else if(cls.split("-").includes("xl")){
			gridStyle += formatColStyle(cls, xlDevice, prcntWidth);
		}
		else {
			if(cls.split("-").includes("offset")){
				gridStyle += `
				  margin-left: ${ prcntWidth }%;
				`;
			}
			else {
				gridStyle += `
					max-width: ${ prcntWidth }%;
					flex: 0 0 ${ prcntWidth }%;
				`;
			}
		}
	});



	const CustomCol = styled.div`
		${ colStyle }
		${ gridStyle }
	`;

	return (
		<CustomCol { ...props }>
			{ props.children }
		</CustomCol>
	)
}

export default Col;
