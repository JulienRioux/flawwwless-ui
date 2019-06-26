import React from "react";
// import styled from "styled-components";
import styles from "./Container.scss";

const Container = (props) => {

	// Setup the container => i.e. full width or normal one
	let CustomContainer;

	// Setup the gutterSize
	const gutterSize = "12px";

	let containerClass;

	if(props.full){
		containerClass = styles["flwww-container-full"];
	} else {
		containerClass = styles["flwww-container"];
	}

	// if(props.full){
	// 	CustomContainer = styled.div`
	// 		width: 100%;
	// 	  padding-right: ${ gutterSize };
	// 	  padding-left: ${ gutterSize };
	// 	  margin-right: auto;
	// 	  margin-left: auto;
	// 	`;
	// } else {
	// 	CustomContainer = styled.div`
	// 	  width: 100%;
	// 	  padding-right: ${ gutterSize };
	// 	  padding-left: ${ gutterSize };
	// 	  margin-right: auto;
	// 	  margin-left: auto;
	//
	// 		@media (min-width: 576px) {
	// 		  max-width: 540px;
	// 		}
	//
	// 		@media (min-width: 768px) {
	// 		  max-width: 720px;
	// 		}
	//
	// 		@media (min-width: 992px) {
	// 		  max-width: 960px;
	// 		}
	//
	// 		@media (min-width: 1200px) {
	// 		  max-width: 1140px;
	// 		}
	//   `;
	// }

	// // Copy all the children and pass the props (gutterSize)
	// const childrenWithProps = React.Children.map(props.children, child => (
	// 	React.cloneElement(child, { gutterSize })
	// ));



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
