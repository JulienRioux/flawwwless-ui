import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import styles from "../AuthForm.css";
import Button from "../../../Button";
import Input from "../../../Input";
import message from "../../../Message";
import TopLoader from "../../../TopLoader";



export default class Login extends Component {
	state = {
		email: "julien.rioux@hotmail.com",
		password: "password",
		redirect: false,
		loading: false,
	}

	handleChange = async (e) => {
		await this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		// add a loading state
		this.setState({ loading: true });
		// Add the firebase auth here:
		// *********************
		setTimeout(() => {
			message("Just logged in!", "success");
			this.setState({
				loading: false,
				email: "",
				password: "",
			});
			this.props.closeAuthModal();
		}, 2000);
	}

	componentDidUpdate(){
		// // If the user is verifying his email: put his email in the input
		// if(this.props.userEmail !== undefined && this.state.email !== this.props.userEmail){
		// 	this.setState({ email: this.props.userEmail })
		// }
	}


	render(){

		if(this.state.redirect){
			return <Redirect to='/app/catalog' />
		};

		return(

			<div className={ styles.fadeIn }>
				<div className={ styles.authBtnDiv }>
					<h1 className={ styles.authTitle }>
						<span>Sign in 👋</span>
					</h1>

					<span className={ styles.changeFormBtnDiv }>
						or
						<button
							onClick={ this.props.showSignin }
							className={ styles.createAnAccount }>
							<span className="">create an account</span>
						</button>
					</span>

				</div>
				<form
					// autoComplete="off"
					onSubmit={ this.handleSubmit }>
					<div className={ styles.formGroup }>
						<label
							className={ styles.formGroupLabel }
							htmlFor="email">email</label>
						<Input
							value={ this.state.email }
							onChange={ this.handleChange }
							type="email"
							name="email"
							autoCapitalize="off"
							placeholder="Enter your email"
							required
							autoFocus />
					</div>
					<div className={ styles.formGroup }>
						<label
							className={ styles.formGroupLabel }
							htmlFor="password">password</label>
						<Input
							value={ this.state.password }
							onChange={ this.handleChange }
							type="password"
							name="password"
							placeholder="Enter your password"
							required />
					</div>

					<div
						style={{ paddingTop: "1rem" }}
						className={ styles.signupButtonsDiv }>
						<span
							onClick={ () => alert("Getting your email back!") }
							style={{ fontSize: "13px" }}
							className={ styles.createAnAccount }>Forget your password?</span>

						<div
							className={ styles.signupBtnDiv }>
							<Button
								loading={ this.state.loading }
								type="primary">sign in</Button>
						</div>
					</div>
				</form>

				<TopLoader loading={ this.state.loading } />
			</div>
		)
	}
}
