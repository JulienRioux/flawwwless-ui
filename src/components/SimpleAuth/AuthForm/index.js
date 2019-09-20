import React, { Component } from "react";
import styles from "./AuthForm.css";
import Login from "./Login";
import Signup from "./Signup";
import Modal from "../../Modal";
import Terms from "./Terms";
import Privacy from "./Privacy";


class AuthForm extends Component {
	state = {
		formType: "login",
		verifEmail: ""
	}

	showLogin = () => {
		this.setState({
			formType: "login"
		})
	};

	showSignin = () => {
		this.setState({formType: "signup"})
	};

	showTerms = () => {
		this.setState({formType: "terms"})
	};

	showPrivacy = () => {
		this.setState({formType: "privacy"})
	};

	closeAuthModal = () => {
		this.setState({ formType: "login" });
		this.props.toggleModal();
	}

	componentDidMount(){
		// Add the user when verifying...

		// if(this.props.userEmail){
		// 	this.setState({verifEmail: this.props.userEmail})
		// }
	}

	render(){
		const { formType } = this.state;
		// Pass the tempEmail to the login component when a user just register so he just have to add his password to login
		let userForm = (
			<Login
				  userEmail= { this.props.userEmail }
				  showSignin={ this.showSignin }
					closeAuthModal={ this.closeAuthModal } />
		);



		if(formType === "signup"){
			userForm = (
				<Signup
					showTerms={ this.showTerms }
					showPrivacy={ this.showPrivacy }
					showLogin={ this.showLogin } />
			)
		} else if(formType === "terms"){
			userForm = (
				<Terms
					showSignin={ this.showSignin } />
			)
		} else if(formType === "privacy"){
			userForm = (
				<Privacy
					showSignin={ this.showSignin } />
			)
		}


		return(
			<div>
				<Modal
					isVisible={ this.props.isVisible }
					toggleModal={ this.closeAuthModal }
				>
					<div className={ styles.userFormCenter }>
						<div className={ styles.userFormDiv }>
							{ userForm }
						</div>
					</div>
				</Modal>
			</div>
		)
	}
}

export default AuthForm;
