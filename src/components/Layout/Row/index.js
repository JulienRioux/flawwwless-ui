import React from "react";
import styled from "styled-components";

const Row = (props) => {

	const CustomRow = styled.div`
		display: flex;
		flex-wrap: wrap;
		margin-right: -10px;
		margin-left: -10px;
	`;

	return (
		<CustomRow>
		  { props.children }
		</CustomRow>
	)
}

export default Row;
