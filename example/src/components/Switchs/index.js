import React, { Component } from 'react';
import { Switch, Card, Container } from "flwww";
import styles from "./Switchs.scss";

class Switchs extends Component {
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
					<h1>Switch</h1>

					<div style={{ padding: "1rem 0" }}>
						<Switch
							name="switchVal"
							onChange={ this.handleChange }
							checked={ this.state.switchVal }
							// disabled={ true }
						/>
					</div>
				</Card>
			</Container>
		)
	}
}

export default Switchs;
