import React, { Component } from 'react';
import { Card, Input, TextArea, Container } from "flwww";
import "./Input.css";


class Inputs extends Component {
	state = {
		input1: "hello",
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.val
		})
	}

	render(){
		return (
			<Container>
				<Card>
					<div className="componentBlock">
						<h3 className="componentTitle">Input</h3>
						<p className="componentDescr">A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.</p>

						<div style={{ margin: "1rem 0"}}>
							<div style={{ margin: ".5rem 0" }} className="buttonBlock">
								<div className="col-lg-4 col-md-8">
									<Input
										value={ this.state.input1 }
										name="input1"
										onChange={ this.handleChange }
										icon="search"
										type="text"
										placeholder="Search something"
										style={{ borderRadius: "2rem", padding: "5px 100px" }} />
								</div>
							</div>
						</div>

						<div style={{ margin: "1rem 0"}}>
							<div
								style={{ margin: ".5rem 0" }}
								className="buttonBlock">
								<div className="col-lg-4 col-md-8">
									<Input
										// value={ this.state.input1 }
										name="input1"
										onChange={ this.handleChange }
										icon="mail"
										type="text"
										placeholder="Enter your email" />

									<Input
										// value={ this.state.input1 }
										name="input1"
										onChange={ this.handleChange }
										icon="lock"
										type="password"
										placeholder="Enter your password" />
								</div>
							</div>
						</div>

						<div style={{ margin: "1rem 0"}}>
							<div style={{ margin: ".5rem 0" }} className="buttonBlock">
								<div className="col-lg-4 col-md-8">
									<Input
										error={ true }
										value={ this.state.input1 }
										name="input1"
										onChange={ this.handleChange }
										type="text"
										placeholder="Search something" />
								</div>
							</div>
						</div>

						<div>
							<div style={{ margin: ".5rem 0" }} className="buttonBlock">
								<div className="col-lg-4 col-md-8">

									<Input
										icon="search"
										type="text"
										style={{ fontSize: ".8rem" }}
										placeholder="Search something" />

									<Input
										icon="search"
										type="text"
										placeholder="Search something" />

									<Input
										icon="user"
										type="text"
										style={{ fontSize: "1.5rem" }}
										placeholder="Search something" />

									<Input
										icon="globe"
										type="text"
										style={{ fontSize: "2rem" }}
										placeholder="Search something" />

									<Input type="text" placeholder="This is a text input" />
									<Input type="number" placeholder="This is a number input" />
									<Input type="number" placeholder="This is a number input without spin" noSpin />
									<Input type="search" placeholder="This is a search input" />
									<Input type="password" placeholder="This is a password input" />


								  <TextArea
										rows={ 4 }
										placeholder="This is a textArea" />
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Container>
		)
	}
}

export default Inputs;
