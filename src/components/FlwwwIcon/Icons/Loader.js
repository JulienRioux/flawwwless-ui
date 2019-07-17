import React from 'react';

export const Loader = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path d="M620,438.501515 L620,257.003029 C620.499763,257.00101 620.999763,257 621.5,257 C822.088814,257 984.729711,419.474343 984.999663,620 L984.999688,620 L620,620 L620,438.501515 L620,170.00101 C620.333248,170.000363 620.666582,170 621,170 C869.528137,170 1071,371.471863 1071,620 L620,620 L620,438.501515 Z" id="Combined-Shape" fill={ props.color }></path>
			</g>
		</svg>
	)
}

export default Loader;
