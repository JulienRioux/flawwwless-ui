import React, { Component } from 'react';
import GetContext from "../GetContext";
import styles from "./Switch.scss";

class Switch extends Component {


	render(){
		let { checked, name, onChange, disabled } = this.props;
		const { primaryColor } = this.props.context;
		const disabledClass = disabled ? styles.disabledClass : "";

		return (

			<label className={ styles.switch }>
				<input
				  name={ name }
				  checked={ checked }
					onChange={ onChange }
					disabled={ disabled }
				  type="checkbox" />
				<span
				  onClick={ onChange }
					style={{ backgroundColor: checked ? primaryColor : "#d2d2d2" }}
				  className={ `${ styles.slider } ${ disabledClass }` }></span>
			</label>
		)
	}
}

Switch.defaultProps = {
	checked: undefined,
	name: undefined,
	onChange: undefined,
	disabled: false,
}

export default GetContext(Switch);
