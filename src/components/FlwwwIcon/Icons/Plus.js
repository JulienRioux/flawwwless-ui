import React from 'react';

export const Time = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path d="M585,585 L585,289 C585,269.670034 600.670034,254 620,254 C639.329966,254 655,269.670034 655,289 L655,585 L951,585 C970.329966,585 986,600.670034 986,620 C986,639.329966 970.329966,655 951,655 L655,655 L655,951 C655,970.329966 639.329966,986 620,986 C600.670034,986 585,970.329966 585,951 L585,655 L289,655 C269.670034,655 254,639.329966 254,620 C254,600.670034 269.670034,585 289,585 L585,585 Z" id="Combined-Shape" fill={ props.color }></path>
			</g>
		</svg>
	)
}

export default Time;
