import React from 'react';

export const Globe = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<circle id="Oval" stroke={ props.color } strokeWidth="40" cx="620" cy="621" r="314"></circle>
				<path d="M620,935 C793.333333,935 793.333333,307 620,307 C446.666667,307 446.666667,935 620,935 Z" id="Oval" stroke={ props.color } strokeWidth="40"></path>
				<path d="M622,305 L618,935" id="Path-7" stroke={ props.color } strokeWidth="40"></path>
				<path d="M622,305 L618,936" id="Path-7" stroke={ props.color } strokeWidth="40" transform="translate(620.000000, 620.500000) rotate(90.000000) translate(-620.000000, -620.500000) "></path>
				<path d="M380,812 C457.849781,770.666667 537.145131,750 617.886053,750 C698.626974,750 780.331623,770.666667 863,812" id="Path-8" stroke={ props.color } strokeWidth="40"></path>
				<path d="M376,476 C453.849781,434.666667 533.145131,414 613.886053,414 C694.626974,414 776.331623,434.666667 859,476" id="Path-8" stroke={ props.color } strokeWidth="40" transform="translate(617.500000, 445.000000) scale(1, -1) translate(-617.500000, -445.000000) "></path>
			</g>
		</svg>
	)
}

export default Globe;
