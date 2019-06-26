import React from "react";
import styles from "./Container.scss";
import { gutterSize } from "../layoutParams";

const Container = (props) => {

	// Setup the container => i.e. full width or normal one
	let CustomContainer;

	// Add class to the container
	let containerClass;

	if(props.full){
		containerClass = styles["flwww-container-full"];
	} else {
		containerClass = styles["flwww-container"];
	}

	return (
		<div
			className={ containerClass }
			{ ...props }
			style={{
				paddingRight: gutterSize,
				paddingLeft: gutterSize
			}}>
			{ props.children }
		</div>
	)
}

export default Container;
