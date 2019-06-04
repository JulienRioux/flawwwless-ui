import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Card.css";

export default class Card extends Component {
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.node.isRequired,
		border: PropTypes.string,
		className: PropTypes.string,
		padding: PropTypes.string,
	}

	render(){
		let { border, title, children, className, padding } = this.props;

		let borderStyle = "";
		if(border === "none"){
			borderStyle = styles.noBorderCard;
		}

		const cardHeader = this.props.title ? (
			<div className={`${ styles.cardHead }`}>
				<div className={`${ styles.cardHeadTitle }`}>
					<span>{ title }</span>
				</div>
			</div>) : null;

		className = className ? className : "";

		return (
			<div
				{ ...this.props }
				className={`${ styles.card } ${  borderStyle } ${ className }`}>
				{ cardHeader }
				<div
					style={ padding && { padding }}
					className={`${ styles.cardBody }`}>
					{ children }
				</div>
			</div>
		)
	}
}
