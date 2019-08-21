import React from 'react';
import styles from "./Statistic.scss";
import Icon from "../FlwwwIcon";

const Statistic = (props) => {

	const { title, value, prevValue, currency, valueClassName } = props;

	const prcntChange = Math.round(((value - prevValue) / prevValue * 100) * 100) / 100;

	// Check if it's a positiveChange
	const positiveChange = prcntChange >= 0;

	let iconType = "arrowTop";
	let iconBgColor = "#23d160";
	// Change the value if it's negative
	if(!positiveChange){
		iconType = "arrowDown";
		iconBgColor = "#ff2b2b";
	}

	return(
		<div className={ styles.statWrapper }>
			<div>
				<div className={ styles.title }>{ title }</div>
			</div>

			<div className={ styles.statBottomWrapper }>

				<div className={ styles.mainVal }>
					<div className={ `${ styles.value } ${ valueClassName }` }>{ numberWithCommas(value) }</div>
					<div className={ styles.currency }>{ currency }</div>
				</div>

				<div className={ styles.otherVal }>
					<div
						className={ styles.prcntChangeDiv }>
						<div
							style={{ backgroundColor: iconBgColor }}
							className={ styles.arrow }>
							<Icon
								type={ iconType }
								color="#fff"
								size="30px" />
						</div>
						<div className={ styles.prcntChange }>
							<span>{ positiveChange && "+" }{ prcntChange }%</span>
						</div>
					</div>
					<div className={ styles.prevVal }>Previously: { numberWithCommas(prevValue) }</div>
				</div>

			</div>
		</div>
	)
}

Statistic.defaultProps = {
	title: "",
	value: undefined,
	prevValue: undefined,
	currency: undefined,
	valueClassName: "",
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default Statistic;
