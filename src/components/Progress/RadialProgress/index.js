import React from 'react';
import styles from "../Progress.scss";
import ThemeContext from "../../../context/themeContext";

const RadialProgress = props => {

	const viewBoxSize = 36;
	// make the circle 90% of the viewbox
	const diameter = viewBoxSize * .8;
	const radius = diameter / 2;

	// get the starting points
	const xStart = viewBoxSize / 2;
	const yStart = (viewBoxSize - diameter) / 2;

	console.log(yStart);

	// const strokeSize = 3;


	const textStyle = {
	  fill: "#555",
	  fontFamily: "sans-serif",
	  fontSize: "0.6em",
	  textAnchor: "middle",
	};

	const prcntCharStyle = {
		fill: "#333",
	  fontFamily: "sans-serif",
	  fontSize: "0.3em",
	  opacity: .5,
	}

	let { prcnt } = props;
	prcnt = prcnt + "";

	// Check if there is other color that override the default one
	const { strokeColor } = props;

	return (
		<div style={{ height: props.size, width: props.size }}>
			<svg viewBox={`0 0 ${ viewBoxSize } ${ viewBoxSize }`}>
				<path
					d="M18 2.0845
						a 15.9155 15.9155 0 0 1 0 31.831
						a 15.9155 15.9155 0 0 1 0 -31.831"
					fill="none"
					stroke="#eee"
					strokeWidth="2"
				/>

				{
					prcnt && (
						<path
							className={ styles.progressAnim }
							fill="none"
							stroke={ strokeColor }
							strokeWidth="2"
							strokeLinecap={ props.square ? "square" : "round" }
							stroke-dasharray={ `${ prcnt }, 100` }
							d="M18 2.0845
								a 15.9155 15.9155 0 0 1 0 31.831
								a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
					)
				}

				<g className={ styles.radialText }>
					<text
						style={ textStyle }
						x="17"
						y="21">{ prcnt || 0 }
					</text>

					<text
						style={ prcntCharStyle }
						x={ prcnt.length > 1 ? 22.8 : 20.6 }
						y="17.7" >%</text>
				</g>

			</svg>
		</div>
	)
}

const RadialProgressWrapper = (props) => {

	return (
		<ThemeContext.Consumer>
			{ context => {

				// Check if there is other color that override the default one
				let strokeColor = "#006eff";

				if(props.strokeColor){
					strokeColor = props.strokeColor;
				}
				else if(context && context.primaryColor){
					strokeColor = context.primaryColor;
				}

				return (
					<RadialProgress { ...props } strokeColor={ strokeColor } />
				)
			}}
		</ThemeContext.Consumer>
	)
}



export default RadialProgressWrapper;
