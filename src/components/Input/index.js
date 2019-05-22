import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Input.scss";
import Icon from "../Icon";


class Input extends Component {
	static propTypes = {
		children: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		className: PropTypes.string,
		icon: PropTypes.string,
	}

	render(){
		let { placeholder, type, className, icon } = this.props;

		className = className ? className : "";

		const inputWithIcon = icon ? styles.inputWithIcon : "";

		return (
			<span className={ styles.inputWrapper }>
				<input
					{ ...this.props }
					className={ `${ className } ${ inputWithIcon }` }/>

				{
					icon && (
						<span className={ styles.inputIcon }>
							<Icon
								type="user"
								size="1.4rem"
							/>
						</span>
					)
				}
			</span>
		)
	}
}

export default Input;
