import React from 'react';

export const StarOutlined = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<polygon id="Star" stroke={ props.color } strokeWidth="70" strokeLinejoin="round" points="620 780 384.885899 943.606798 467.830957 669.442719 239.577393 496.393202 525.95436 490.557281 620 220 714.04564 490.557281 1000.42261 496.393202 772.169043 669.442719 855.114101 943.606798"></polygon>
			</g>
		</svg>
	)
}

export default StarOutlined;
