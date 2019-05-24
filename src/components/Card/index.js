import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Card.css";

export default class Card extends Component {
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.node.isRequired,
		border: PropTypes.string,
		extra: PropTypes.node,
		className: PropTypes.string,
	}

	render(){
		let { border, title, children, extra, className } = this.props;

		let borderStyle = "";
		if(border === "none"){
			borderStyle = styles.noBorderCard;
		} else if(border === "shadow"){
			borderStyle = styles.cardShadow;
		}

		const topRightBtn = extra;

		const cardHeader = this.props.title ? (
			<div className={`${ styles.cardHead }`}>
				<div className={`${ styles.cardHeadTitle }`}>
					<span>{ title }</span>
				</div>
				<span className={`${ styles.topRightBtn }`}>{ topRightBtn && (topRightBtn)}</span>
			</div>) : null;

		className = className ? className : "";

		return (
			<div
				className={`${ styles.card } ${  borderStyle } ${ className }`}>
				{ cardHeader }
				<div
					{ ...this.props }
					className={`${ styles.cardBody }`}>
					{ children }
				</div>
			</div>
		)
	}
}
