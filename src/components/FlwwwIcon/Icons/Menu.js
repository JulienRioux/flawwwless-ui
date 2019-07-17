import React from 'react';

export const Menu = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
		    <g id="Artboard" stroke="none" strokeWidth="1" fill={ props.color } fillRule="evenodd">
					<rect id="Rectangle" x="202" y="350" width="837" height="70" rx="35"></rect>
	        <rect id="Rectangle" x="202" y="585" width="837" height="70" rx="35"></rect>
	        <rect id="Rectangle" x="202" y="820" width="837" height="70" rx="35"></rect>
		    </g>
		</svg>
	)
}

export default Menu;
