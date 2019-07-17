import React from 'react';

export const Edit = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group" transform="translate(295.000000, 348.000000)" stroke={ props.color } strokeWidth="70">
						<path d="M279.347642,449.619406 L326.553571,494.283018 L370.322743,450.123263 L372.07945,13.2253757 C372.07948,13.2162008 372.07948,13.2162008 372.079481,13.2070258 C372.07823,10.9978872 370.286354,9.20804125 368.077216,9.20929304 L283.592636,9.25716536 C281.385267,9.25841615 279.596154,11.0475296 279.594903,13.2548982 L279.347642,449.619406 Z" id="Rectangle" fill={ props.color } transform="translate(345.709292, 258.709292) rotate(45.000000) translate(-345.709292, -258.709292) "></path>
						<path d="M0.5,543 L650.5,543" id="Line"></path>
				</g>
			</g>
		</svg>
	)
}

export default Edit;
