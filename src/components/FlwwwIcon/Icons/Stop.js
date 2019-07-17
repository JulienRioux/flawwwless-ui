import React from 'react';

export const Card = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<circle id="Oval" stroke={ props.color } strokeWidth="70" cx="620" cy="621" r="314"></circle>
        <path d="M622,305 L618,936" id="Path-7" stroke={ props.color } strokeWidth="70" transform="translate(620.000000, 620.500000) rotate(45.000000) translate(-620.000000, -620.500000) "></path>
			</g>
		</svg>
	)
}

export default Card;
