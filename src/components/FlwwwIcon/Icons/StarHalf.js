import React from 'react';

export const Star = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Group" transform="translate(220.000000, 220.000000)">
							<polygon id="Star" stroke={ props.color } strokeWidth="70" strokeLinejoin="round" points="400 560 164.885899 723.606798 247.830957 449.442719 19.5773935 276.393202 305.95436 270.557281 400 0 494.04564 270.557281 780.422607 276.393202 552.169043 449.442719 635.114101 723.606798"></polygon>
							<path d="M400,525.056918 L442.63587,554.910876 L411.638085,599.1803 L377.772424,575.467309 L164.885899,723.606798 L247.830957,449.442719 L19.5773935,276.393202 L305.95436,270.557281 L400,6.82121026e-13 C400,310.139996 400,473.486479 400,490.039448 L400,525.056918 Z" id="Combined-Shape" fill={ props.color }></path>
					</g>
			</g>
		</svg>
	)
}

export default Star;
