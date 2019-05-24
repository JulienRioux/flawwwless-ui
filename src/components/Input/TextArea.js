import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.scss";
import Icon from "../Icon";


class TextArea extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
	}

	render(){
		const { placeholder, type } = this.props;
		const className = "";

		return (
			<span className={ styles.inputWrapper }>
				<textarea
					{ ...this.props }
					className={ `${ styles.textInput } ${ className }` }
				/>
			</span>
		)
	}
}

export default TextArea;
