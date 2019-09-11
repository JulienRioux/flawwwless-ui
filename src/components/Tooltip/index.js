import React, { Component, Fragment } from 'react';
import styles from "./Tooltip.scss";
import Icon from "../FlwwwIcon";

import GetContext from "../GetContext";

class Tooltip extends Component {

	render(){
		// Get the primary color from the context or default (getContext HOC!)
		const { primaryColor, primaryTextColor } = this.props.context;

		const tooltipStyle = this.props.dark ? styles.tooltiptextDark : "";

		// Manage the position.
		let position = "";
		if(this.props.position === "bottom"){
			position = styles.bottomTooltip;
		}


		return (
			<div className={ styles.tooltipWrapper }>
			  { this.props.children }
				<div
					// style={{ transitionDelay: ".25s" }}
					className={ `${ styles.tooltip } ${ position }` }>
				  <span className={ `${ styles.tooltiptext } ${ tooltipStyle }` }>{ this.props.text }</span>
				</div>
			</div>
		)
	}
}


export default GetContext(Tooltip);
