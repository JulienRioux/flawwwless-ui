import React from 'react';

export const Delete = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path d="M423.5,496 L423.5,935 C423.5,937.209139 425.290861,939 427.5,939 L813.5,939 C815.709139,939 817.5,937.209139 817.5,935 L817.5,496 L423.5,496 Z" id="Rectangle" stroke={ props.color } strokeWidth="70"></path>
				<path d="M511.5,391 L729.5,391 L729.5,302.567566 C729.49788,302.565676 729.495745,302.563768 729.493594,302.561849 C728.490484,301.667011 726.722683,301 724.52847,301 L516.47153,301 C514.277317,301 512.509516,301.667011 511.506406,302.561849 C511.504255,302.563768 511.50212,302.565676 511.5,302.567573 L511.5,391 Z" id="Rectangle" stroke={ props.color } strokeWidth="70"></path>
				<path d="M321.5,426 L321.5,397.657143 C321.5,377.964247 339.348915,362 361.366667,362 L879.633333,362 C901.651085,362 919.5,377.964247 919.5,397.657143 L919.5,426 L321.5,426 Z" id="Rectangle" fill={ props.color }></path>
			</g>
		</svg>
	)
}

export default Delete;
