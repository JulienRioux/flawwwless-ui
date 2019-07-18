import React from 'react';
import styles from "../Progress.scss";
import ThemeContext from "../../../context/themeContext";

const DefaultProgress = props => {


	let { prcnt } = props;

	// Check if there is other color that override the default one
	const { strokeColor } = props;

	const strokeStyle = props.square ? {} : { borderRadius: "5px" }

	return (
		<div className={ styles.progressMainWrapper }>
			<div
			  className={ styles.progressWrapper }
				style={{ width: "100%" }}>
				<div style={ strokeStyle } className={ styles.progressBG }>
				</div>
				<div
				  style={{
						background: strokeColor,
						width: `${ prcnt }%`,
						...strokeStyle,
					}}
				  className={ `${ styles.defaultProgress } ${ styles.defaultProgressAnim  }` }>
				</div>
			</div>

			<div className={ styles.progressText }>{ prcnt }<span className={styles.progressChar }>%</span></div>
		</div>
	)
}

const DefaultProgressWrapper = (props) => {

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
					<DefaultProgress { ...props } strokeColor={ strokeColor } />
				)
			}}
		</ThemeContext.Consumer>
	)
}



export default DefaultProgressWrapper;
