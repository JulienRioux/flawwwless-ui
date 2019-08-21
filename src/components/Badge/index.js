import React, { Component } from "react";
import styles from "./Badge.scss";

class Badge extends Component {
	state = {
		needAnimationOut: false,
	}

	componentDidUpdate(prevProps, prevState){
		// Check if the badge is already mounted to avoid animation out if not needed
		if(!prevState.needAnimationOut){
			this.setState({ needAnimationOut: true });
		}
	}

	render(){
		const { count, dot, text } = this.props;
		// Check fi the badge need an animation out (the component just mounted and no animation if count === 0)
		const { needAnimationOut } = this.state;

		// init the group class for the badge
		let badgeClass = "";

		// override style
		const overrideStyle = this.props.style;


		// Show the counter only if it's greater than 0
		let badgeDisplay = count > 0 ? count : "";
		// Display the right thing inside the badge
		if(count === undefined && text){
			badgeDisplay = text;
		}

		let noBadgeClass = "";

		// COUNTER BADGE
		// display badge if count is > 0
		if(count || count <= 0 || text){
			// Add animation to badge if present
			noBadgeClass = count <= 0 ? styles.noBadgeClass : "";
			// Dont add animation if the badge is just mounted and his counter is === 0
			if(!needAnimationOut && count <= 0){
				badgeClass = "";
			}
			else {
				// Override the badgeClass
				badgeClass = `${ styles.badge } ${ noBadgeClass }`;
			}
		}

		// NOTIFICATION BADGE
		// display dot if in props & no count
		if (dot !== undefined) {
			if(!dot) {
				noBadgeClass = styles.noBadgeClass;
			}
			// Dont add animation if the badge is just mounted and dot === false
			if(!needAnimationOut && !dot){
				noBadgeClass = "";
			}
			else {
				// Override the badgeClass
				badgeClass = `${ styles.dotBadge } ${ noBadgeClass }`;
			}
		}

		// return the badge wrapper with the right classes
		return (
			<div className={ styles.badgeWrapper }>
				{ this.props.children }
				<div
					style={ overrideStyle }
					className={ badgeClass }>
					<span
					  key={ badgeDisplay }
					  className={ styles.badgeText }>{ badgeDisplay }</span>
				</div>
			</div>
		)
	}
}

Badge.defaultProps = {
	count: undefined,
	dot: undefined,
	style: {},
}


export default Badge;
