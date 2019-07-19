import React, { Component } from 'react';
import { Container, Checkbox, Card } from "flwww";

class Checkboxs extends Component {
	state = {
		checkbox1: true,
		checkbox2: false,
		checkbox3: false,
	}


	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.checked });
	}


	render(){
		return (
			<Container>
			  <Card>
					<h1>Checkbox</h1>
					<div style={{ padding: "1rem 0" }}>
					  <Checkbox
						  name="checkbox1"
						  onChange={ this.handleChange }
						  checked={ this.state.checkbox1 } />
					</div>

					<div style={{ padding: "1rem 0" }}>
					  <Checkbox
						  name="checkbox2"
						  checked={ this.state.checkbox2 }
						  onChange={ this.handleChange }>Checkbox</Checkbox>
					</div>

					<div style={{ padding: "1rem 0" }}>
					  <Checkbox
							name="checkbox3"
							checked={ this.state.checkbox3 }
						  disabled>Sign up</Checkbox>
					</div>
				</Card>

			</Container>
		)
	}
}

export default Checkboxs;
