import React from 'react';
import styled from "styled-components";

const Container = (props) => {

	// Setup the container => i.e. full width or normal one
	let CustomContainer;

	if(props.full){
		CustomContainer = styled.div`
			width: 100%;
		  padding-right: 10px;
		  padding-left: 10px;
		  margin-right: auto;
		  margin-left: auto;
		`;
	} else {
		CustomContainer = styled.div`
		  width: 100%;
		  padding-right: 10px;
		  padding-left: 10px;
		  margin-right: auto;
		  margin-left: auto;

			@media (min-width: 576px) {
			  max-width: 540px;
			}

			@media (min-width: 768px) {
			  max-width: 720px;
			}

			@media (min-width: 992px) {
			  max-width: 960px;
			}

			@media (min-width: 1200px) {
			  max-width: 1140px;
			}
	  `;
	}



	return (
		<CustomContainer>
		  { props.children }
		</CustomContainer>
	)
}

export default Container;

// .container {
  // width: 100%;
  // padding-right: 15px;
  // padding-left: 15px;
  // margin-right: auto;
  // margin-left: auto;
// }
//
// @media (min-width: 576px) {
//   .container {
//     max-width: 540px;
//   }
// }
//
// @media (min-width: 768px) {
//   .container {
//     max-width: 720px;
//   }
// }
//
// @media (min-width: 992px) {
//   .container {
//     max-width: 960px;
//   }
// }
//
// @media (min-width: 1200px) {
//   .container {
//     max-width: 1140px;
//   }
// }
