import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// import Swal from "sweetalert2";
import styles from "../AuthForm.css";
import Button from "../../../Button";
import Input from "../../../Input";
import message from "../../../Message";
import Checkbox from "../../../Checkbox";


export default class Signup extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
		showModal: false,
		modalType: "terms",
		termsAndPolicyCheckbox: false,
		redirect: false
	}

	toggleModal = async (modalType) => {
		// Toggle the Modal (aboutUs, jobs, investors)
		this.setState(prevState => ({
			modalType: modalType,
			showModal: !prevState.showModal
		}));
	}

	resetPassword = () => {
		this.setState({
			password: "",
			confirmPassword: ""
		})
	}



	handleChange = async (e) => {
		await this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  }


	handleSubmit = async (e) => {
		e.preventDefault();
		// signin post to the api
		// TODO:
		// Check for min length of password
		if(this.state.password.length < 6){
			message("Your password need to be at least 6 characters!", "error");
			// Swal({
			// 	type: "error",
			// 	title: "Password too short!",
			// 	text: "Your password need to be at least 6 characters!"
			// })
			// Reset the password
			this.resetPassword();
		}
		else if(this.state.password !== this.state.confirmPassword) {
			// Swal({
			// 	type: "error",
			// 	title: "Your password are not the same...",
			// 	text: `Please enter the same password twice.`
			// });
			message("Please enter the same password twice.", "error");
			// Reset the password
			this.resetPassword();
		} else if(!this.state.termsAndPolicyCheckbox){
			message("You need to accept the terms and privacy policy.", "error");
		}
		else {
			// Create an newUser object
			const newUser = {
				email: this.state.email,
				username: this.state.username,
				password: this.state.password,
			}
			// Posting new user to the DB
			if(await signup(newUser)){
				this.setState({
					redirect: true
				})
			}
		}
	}

	render(){
		if(this.state.redirect){
			return (
				<Redirect to="/emailSent" />
			)
		}
		return(
			<div className={ styles.fadeIn }>
				<div className={ styles.authBtnDiv }>
					<h1 className={ styles.authTitle }>
						<span>Create an account <span style={{ marginLeft: "0px" }}>🛠️</span></span>
					</h1>
				</div>

				<form
					// autoComplete="off"
					onSubmit={ this.handleSubmit } >
					<div className={ styles.formGroup }>
						<label htmlFor="username">username</label>
						<Input
							// className="form-control"
							value={ this.state.username}
							onChange={ this.handleChange }
							type="text"
							name="username"
							autoComplete="off"
							autoCapitalize="off"
							placeholder="Enter your username"
							autoFocus
							required />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="email">email</label>
						<Input
							// className="form-control"
							value={ this.state.email}
							onChange={ this.handleChange }
							type="email"
							name="email"
							autoCapitalize="off"
							placeholder="Enter your email"
							required />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="password">password</label>
						<Input
							// className="form-control"
							value={ this.state.password}
							onChange={ this.handleChange }
							type="password"
							name="password"
							placeholder="Enter your password"
							required />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="confirmPassword">confirm your password</label>
						<Input
							// className="form-control"
							value={ this.state.confirmPassword}
							onChange={ this.handleChange }
							type="password"
							name="confirmPassword"
							placeholder="Confirm your password"
							required />
					</div>

					<div className="form-check form-check-div">
						  <Checkbox
								name="termsAndPolicyCheckbox"
								onChange={ this.handleCheckboxChange }
                checked={ this.state.termsAndPolicyCheckbox }>

								<label className={ `${ styles["form-check-label"] } ${ styles.checkboxLabel }` }>I accept the <span className={ styles.legalLink } onClick={ this.props.showTerms }>Terms</span> and have read the <span className={ styles.legalLink } onClick={ this.props.showPrivacy }>Privacy Policy</span></label>

							</Checkbox>

					    {/*<input
								onClick={ this.clickBox }
								checked={ this.state.agreeTerms }
								type="checkbox"
								className={ `${ styles["form-check-input"] } ${ styles.signupCheckbox }` }
								required/>
							<label className={ `${ styles["form-check-label"] } ${ styles.checkboxLabel }` }>I accept the <span className={ styles.legalLink } onClick={ this.props.showTerms }>Terms</span> and have read the <span className={ styles.legalLink } onClick={ this.props.showPrivacy }>Privacy Policy</span></label>*/}
					</div>

					<div className={ styles.signupButtonsDiv }>
						<span
							onClick={ this.props.showLogin }
							className={ styles.createAnAccount }>Already have an account?</span>

						<div
							className={ styles.signupBtnDiv }>
							<Button
								type="primary">Create an account</Button>
						</div>
					</div>


				</form>
			</div>

		)
	}
}
