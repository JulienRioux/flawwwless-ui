import React from 'react';

export const Refresh = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path d="M620,920 C785.685425,920 920,785.685425 920,620 C920,454.314575 785.685425,320 620,320 C454.314575,320 320,454.314575 320,620" id="Oval" stroke={ props.color } strokeWidth="70" strokeLinecap="round" transform="translate(620.000000, 620.000000) rotate(180.000000) translate(-620.000000, -620.000000) "></path>
				<path d="M707.077709,255.188418 L799.984734,378.270374 C803.977546,383.559997 802.926273,391.084897 797.636651,395.077709 C795.554195,396.649627 793.016153,397.5 790.407025,397.5 L604.592975,397.5 C597.965558,397.5 592.592975,392.127417 592.592975,385.5 C592.592975,382.890872 593.443348,380.35283 595.015266,378.270374 L687.922291,255.188418 C691.915103,249.898795 699.440003,248.847523 704.729626,252.840335 C705.617356,253.510428 706.407616,254.300687 707.077709,255.188418 Z" id="Triangle" fill={ props.color } transform="translate(697.500000, 320.000000) rotate(90.000000) translate(-697.500000, -320.000000) "></path>
			</g>
		</svg>
	)
}

export default Refresh;
