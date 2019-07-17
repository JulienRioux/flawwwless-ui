import React, { Component } from 'react';
import { Card, Input, TextArea, Col, Row, Button } from "flwww";


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
			<div className="container">
				<Row style={{ margin: "12rem 0 8rem" }}>
						<Col grid="lg-6">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://medium.com/flawwwless-ui">
								<img
									className="articleImg"
									width="100%"
									src="https://images.unsplash.com/photo-1563285851-d81750ac22fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" alt=""/>
							</a>
						</Col>
						<Col grid="offset-lg-1 lg-5">
							<h2 className="tutorialTitle">Tutorials</h2>
							<p className="tutorialText">You can find official tutorials about topics related to Flawwwless ui on our Medium page.</p>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://medium.com/flawwwless-ui">
								<Button type="primary">Read now</Button>
							</a>
						</Col>
					</Row>


				<div className="componentBlock">
					<h3 className="componentTitle">TESTING</h3>

					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Col grid="md-6">

								<Input
									autoFocus
									value={ this.state.username }
									name="username"
									onChange={ this.handleChange }
								  type="text"
									placeholder="Enter your username" />
							</Col>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Testing;
