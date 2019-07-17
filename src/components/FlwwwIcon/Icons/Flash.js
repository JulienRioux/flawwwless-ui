import React from 'react';

export const Flash = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group" transform="translate(374.000000, 204.000000)" fill={ props.color }>
						<polygon id="Triangle" points="328.756344 0.421765235 293 445 -5.68434189e-14 445"></polygon>
						<polygon id="Triangle" transform="translate(328.378172, 610.289117) scale(-1, -1) translate(-328.378172, -610.289117) " points="492.756344 388 457 832.578235 164 832.578235"></polygon>
				</g>
			</g>
		</svg>
	)
}

export default Flash;
