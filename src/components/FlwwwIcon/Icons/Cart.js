import React from 'react';

export const Cart = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group-3" transform="translate(240.000000, 284.000000)">
						<g id="Group">
								<path d="M170.644857,56.769697 L734.152009,56.769697 C748.787555,56.769697 760.652009,68.6341511 760.652009,83.269697 C760.652009,85.1006791 760.462247,86.9267314 760.085763,88.7185895 L697.457622,386.794347 C694.880091,399.061985 684.059362,407.845455 671.523868,407.845455 L232.625169,407.845455 C220.068962,407.845455 209.236321,399.03359 206.680125,386.740331 L144.699813,88.6645735 C141.720305,74.3355214 150.920928,60.3041611 165.249981,57.324653 C167.024562,56.9556559 168.832318,56.769697 170.644857,56.769697 Z" id="Rectangle" fill={ props.color }></path>
								<polyline id="Path-6" stroke={ props.color } strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" points="200.135802 231.765286 148.784301 0 0 1.00913995e-16"></polyline>
								<polyline id="Path-6" stroke={ props.color } strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" points="701.648534 493 172.896286 493 241.945131 375.15164"></polyline>
						</g>
						<g id="Group-2" transform="translate(206.000000, 541.000000)" fill={ props.color }>
								<ellipse id="Oval" cx="65.5769231" cy="65.5" rx="65.5769231" ry="65.5"></ellipse>
								<ellipse id="Oval" cx="399.423077" cy="65.5" rx="65.5769231" ry="65.5"></ellipse>
						</g>
				</g>
			</g>
		</svg>
	)
}

export default Cart;
