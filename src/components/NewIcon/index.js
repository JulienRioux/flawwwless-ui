import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import allIcons from "./iconDict";
import iconList from "./iconList";
import styles from "./NewIcon.scss";
import uid from "uid";



class Icon extends Component {
	state = {
		size: this.props.size,
		color: this.props.color,
		iconId: `flwww_Icon_${ uid(10) }`,
	}
	static iconList = iconList;

	componentDidMount(){
		const { size, color } = this.props;
		// Get the style from the parent component (color + fontSize)
		if(!size || !color){
			const parent = document.getElementById(this.state.iconId).parentNode;
			const parentStyle = getComputedStyle(parent);
			// Get the font size if there is no size specified
			let iconSize = size ? size : parentStyle["font-size"];
			// Scale the icon so it look bigger if it get it's size from it's parent fontSize
			if(!size){
				const pxSize = parentStyle["font-size"].split("px")[0] * 1.4;
				iconSize = `${ pxSize }px`;
			}
			//
			// // Get the color if there is no color specified
			let iconColor = color ? color : parentStyle["color"];

			// console.log(iconSize, iconColor);
			//
			this.setState({
				size: iconSize,
				color: iconColor,
			})
		}
		// If the color and the size is specified
		else {
			this.setState({ size, color });
		}
	}

	render(){
		// get the props for the color and size
		const { type, isSpinning } = this.props;
		const { size, color, iconId } = this.state;

		// add a spin animation if its a loader or a the props is telling it
		let isSpinningClass = "";
		if(type === "loader" || type === "loader2"){
			isSpinningClass = styles.isSpinning;
		}
		if(isSpinning !== undefined){
			isSpinningClass = isSpinning ? styles.isSpinning : "";
		}

		return(
			<span
			  id={ iconId }
			  style={{
					height: size,
					width: size,
					verticalAlign: "text-bottom",
					display: "inline-block",
				}}
			  className={ isSpinningClass }>
				<SVG
					key={ `${ type }_${ color }` }
					style={{ height: size, width: size }}
					description={ type }
					src={ allIcons[ type ] }
					preProcessor={code => {
						code = code.replace(/stroke="#979797"/g, `stroke="${ color }"`);
						return code.replace(/fill="#979797"/g, `fill="${ color }"`);
					}}
				/>
			</span>
		)
	}
}

Icon.defaultProps = {
	size: undefined,
	color: undefined,
	isSpinning: undefined,
}

export default Icon;
