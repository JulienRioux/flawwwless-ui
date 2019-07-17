import React from 'react';

export const Bell = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group" transform="translate(347.000000, 281.000000)">
						<path d="M87.5,550 L457.5,550 L457.5,277 C457.5,174.827321 374.672679,92 272.5,92 C170.327321,92 87.5,174.827321 87.5,277 L87.5,550 Z" id="Combined-Shape" stroke={ props.color } fill={ props.color } strokeWidth="70"></path>
						<path d="M44,507 L503,507 C527.024387,507 546.5,526.475613 546.5,550.5 L546.5,585 L0.5,585 L0.5,550.5 C0.5,526.475613 19.9756134,507 44,507 Z" id="Rectangle" fill={ props.color }></path>
						<path d="M200.5,609 L342.5,609 L342.5,609 C342.5,647.659932 311.159932,679 272.5,679 L270.5,679 C231.840068,679 200.5,647.659932 200.5,609 Z" id="Rectangle" fill={ props.color }></path>
						<path d="M233.5,0 L311.5,0 L311.5,31 C311.5,52.5391052 294.039105,70 272.5,70 L272.5,70 C250.960895,70 233.5,52.5391052 233.5,31 L233.5,0 Z" id="Rectangle" fill={ props.color } transform="translate(272.500000, 35.000000) scale(1, -1) translate(-272.500000, -35.000000) "></path>
				</g>
			</g>
		</svg>
	)
}

export default Bell;
