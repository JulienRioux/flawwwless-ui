import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

// Importing all the svgs
import activity from "./IconsSvg/activity.svg"
import airplay from "./IconsSvg/airplay.svg"
import alertCircle from "./IconsSvg/alertCircle.svg"
import alertTriangle from "./IconsSvg/alertTriangle.svg"


// ==============================
//  Helper function
// ==============================
// Those functions allow to write all the imports quickly
import allFilename from "./IconsSvg/list.js";
const iconsList = allFilename.split("\n").map(name => name.replace(/.svg/g, ""));
console.log("Icon List:", iconsList);

let allImports = "";

iconsList.forEach(name => {
	allImports += `\nimport ${ name } from "./IconsSvg/${ name }.svg"`;
});

console.log("SVG import list:", allImports);

// create an object to store all the source with the keyNames
let iconDict = "{\n";

iconsList.forEach((icon) => {
	iconDict += `\t"${ icon }": ${ icon },\n`
});

iconDict += "}";

console.log("Icon Dictionary:", iconDict);


// ==============================
//  END of Helper function
// ==============================


class Icon extends Component {

	render(){
		// The dictionary that store all the icon name with icon src
		const allIcons = {
			"activity": activity,
			"airplay": airplay,
			"alertCircle": alertCircle,
			"alertTriangle": alertTriangle,
		};
		// the list of all icons
		const iconList = ["activity", "airplay", "alertCircle", "alertTriangle"];
		// get the props for the color and size
		const { size, color } = this.props;

		return(
			<div>
			  {
					iconList.map(name => (
						<SVG
						  key={ name }
						  style={{ height: size, width: size }}
						  description={ name }
						  src={ allIcons[ name ] }
							preProcessor={code => {
								code = code.replace(/stroke="#979797"/g, `stroke="${ color }"`);
								return code.replace(/fill="#979797"/g, `fill="${ color }"`);
							}}
						/>
					))
				}

			</div>
		)
	}
}

Icon.defaultProps = {
	size: "50px",
	color: "#006eff",
}

export default Icon;
