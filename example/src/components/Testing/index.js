import React, { Component } from 'react';
import { Card, Input, TextArea, Col, Row, Button, Container } from "flwww";


class Testing extends Component {
	state = {
		username: "",
	}

	handleChange = (e) => {
		console.log(e.target);
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	render(){
		return (
			<Container>
				<Card>
					<div className="componentBlock">
						<h3 className="componentTitle">TESTING</h3>

						<Card>
							<div style={{ margin: ".5rem 0" }} className="buttonBlock">
								<Col grid="md-6">

									<Input
										value={ this.state.username }
										name="username"
										onChange={ this.handleChange }
									  type="text"
										placeholder="Enter your username" />
								</Col>
							</div>
						</Card>
					</div>
				</Card>
			</Container>
		)
	}
}

export default Testing;
