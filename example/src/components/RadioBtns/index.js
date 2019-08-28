import React, { Component } from 'react';
import { Switch, Card, Container } from "flwww";
import styles from "./RadioBtns.scss";

class RadioBtns extends Component {
	state = {
		switchVal: true,
	}


	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.checked });
	}

	render(){

		return (
			<Container>
				<Card>
					<h1>Radio</h1>


				</Card>
			</Container>
		)
	}
}

export default RadioBtns;
