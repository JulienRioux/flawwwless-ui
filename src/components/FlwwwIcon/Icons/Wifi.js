import React from 'react';

export const Card = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group" transform="translate(620.482323, 542.482323) rotate(45.000000) translate(-620.482323, -542.482323) translate(375.482323, 297.482323)">
            <path d="M490,140 C296.700338,140 140,296.700338 140,490" id="Oval" stroke={ props.color } strokeWidth="70"></path>
            <path d="M490,0 C219.380473,0 0,219.380473 0,490" id="Oval" stroke={ props.color } strokeWidth="70"></path>
            <path d="M490,280 C374.020203,280 280,374.020203 280,490" id="Oval" stroke={ props.color } strokeWidth="70"></path>
            <circle id="Oval" fill={ props.color } cx="441" cy="441" r="49"></circle>
        </g>
			</g>
		</svg>
	)
}

export default Card;
