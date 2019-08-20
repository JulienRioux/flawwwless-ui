import React, { Component, Fragment } from 'react';
import styles from "./Checkbox.scss";
import Icon from "../FlwwwIcon";
import uid from "uid";

import GetContext from "../GetContext";

class Checkbox extends Component {
	state = {
		checked: this.props.checked || false,
		checkboxId: "checkbox_" + uid(10),
	}

	handleChange = async (e) => {
		await this.props.onChange(e);
	}

	handleCheckboxClick = async () => {
		await document.querySelector(`#${ this.state.checkboxId }`).click();
	}

	componentDidUpdate(prevProps){
		if(prevProps.checked !== this.props.checked){
			this.setState({
				checked: this.props.checked,
			});
		}
	}


	render(){
		// Get the primary color from the context or default (getContext HOC!)
		const { primaryColor, primaryTextColor } = this.props.context;

		// console.log(this.props.checked);
		let { checked } = this.state;
		const { disabled } = this.props;
		// Make it checked from the props
		if(this.props.checked){
			checked = this.props.checked;
		}

		// Change the style if the checkbox is checked
		let checkboxStyle = {
			border: "2px solid #333",
			background: "#fff",
			transition: ".2s",
		}
		if(checked){
			checkboxStyle = {
				border: `2px solid ${ primaryColor }`,
				background: primaryColor,
				transition: ".2s",
			}
		}
		// Add styling if disabled
		else if(disabled){
			checkboxStyle = {
				border: "2px solid #333",
				background: "#ddd",
				transition: ".2s",
				// opacity: ".6",
			}
		}

		// get the primary color
		// const { primaryColor } = this.props.context;

		// console.log("primaryColor", primaryColor);

		// console.log("==>", this.props.context.primaryColor);



		return (
			<div
			  onClick={ this.handleCheckboxClick }
			  className={ `${ styles.checkboxAndLabel } ${ disabled && styles.disabled }` }>

				<div className={ `${ styles.checkboxWrapper } ${ !checked && styles.unchecked }` }>

					<div
					  // onClick={ this.handleCheckboxClick }
					  style={ checkboxStyle }
					  className={ styles.checkboxDiv }>

						<div
						  style={{
								opacity: checked ? 1 : 0,
								// overflow: "hidden",
							}}
						  className={ styles.checkmark }>

							<Icon
							  color={ primaryTextColor }
							  size={ "18px" }
								type="checkmark" />

						</div>

					</div>

					<input
					  name={ this.props.name }
					  disabled={ disabled }
						id={ this.state.checkboxId }
						checked={ this.state.checked }
						type="checkbox"
						onChange={ this.handleChange } />

				</div>

				{
					this.props.children && (
						<label
						  onClick={ this.handleCheckboxClick }
						  className={ styles.checkboxLabel } htmlFor={ this.state.checkboxId }>{ this.props.children }</label>
					)
				}
			</div>
		)
	}
}


Checkbox.defaultProps = {
	onChange: () => {},
	checked: false,
}



export default GetContext(Checkbox);
