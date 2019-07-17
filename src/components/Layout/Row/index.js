import React from "react";
import { gutterSize } from "../layoutParams";

const Row = (props) => {

	const rowStyle = {
		display: "flex",
		flexWrap: "wrap",
		marginRight: `-${ gutterSize }`,
		marginLeft: `-${ gutterSize }`,
	}

	return (
		<div { ...props } style={{ ...rowStyle, ...props.style }}>
		  { props.children }
		</div>
	)
}

export default Row;
