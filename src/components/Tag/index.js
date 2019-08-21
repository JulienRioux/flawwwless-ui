import React from 'react';
import GetContext from "../GetContext";
import styles from "./Tag.scss";

const Tag = (props) => {

	let mainColor = props.color;
	// If there is no color specified, get the primary color
	if(!mainColor){
		mainColor = props.context.primaryColor;
	}

	const tagStyle = {
		border: `2px solid ${ mainColor }`,
		backgroundColor: `${ mainColor }0b`,
		color: `${ mainColor }`,
		...props.style,
	}

	return (
		<div
		  style={ tagStyle }
			className={ `${ styles.tag } ${ props.className }` }>
		  { props.children }
		</div>
	)
}

Tag.defaultProps = {
	color: undefined,
	style: {},
	className: "",
}

export default GetContext(Tag);
