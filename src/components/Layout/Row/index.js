import React from "react";
import styled from "styled-components";

const Row = (props) => {

	const { gutterSize } = props;

	const CustomRow = styled.div`
		display: flex;
		flex-wrap: wrap;
		margin-right: -${ gutterSize };
		margin-left: -${ gutterSize };
	`;

	// Copy all the children and pass the props (gutterSize)
	const childrenWithProps = React.Children.map(props.children, child => (
		React.cloneElement(child, { gutterSize })
	));

	return (
		<CustomRow { ...props }>
		  { childrenWithProps }
		</CustomRow>
	)
}

export default Row;
