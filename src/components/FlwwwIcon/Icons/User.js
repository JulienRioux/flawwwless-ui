import React from 'react';

export const Cart = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path d="M889,912.753932 C889,909.628434 889,890.04379 889,854 C889,745.752189 768.564598,658 620,658 C471.435402,658 351,745.752189 351,854 C351,886.737451 351,906.322095 351,912.753932" id="Oval" stroke={ props.color } strokeWidth="70"></path>
        <circle id="Oval" stroke={ props.color } strokeWidth="70" cx="620.5" cy="492.5" r="165.5"></circle>
			</g>
		</svg>
	)
}

export default Cart;
