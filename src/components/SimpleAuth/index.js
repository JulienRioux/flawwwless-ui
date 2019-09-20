import React, { Component  } from "react";
import styles from "./FirebaseAuth.scss";
import Col from "../Layout/Col";
import AuthForm from "./AuthForm";


class SimpleAuth extends Component {
	state = {

	}



	render(){


		return(
			<AuthForm
				isVisible={ this.props.isVisible }
				toggleModal={ this.props.toggleModal } />
		)
	}
}

SimpleAuth.defaultProps = {

}

export default SimpleAuth;
