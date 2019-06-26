import React from "react";
import styled from "styled-components";
import { gutterSize } from "../layoutParams";

const Row = (props) => {

	const CustomRow = styled.div`
		display: flex;
		flex-wrap: wrap;
		margin-right: -${ gutterSize };
		margin-left: -${ gutterSize };
	`;

	return (
		<CustomRow { ...props }>
		  { props.children }
		</CustomRow>
	)
}

export default Row;
