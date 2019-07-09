import React, { Component } from 'react';
import { Card, Input, TextArea } from "flwww";


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
				<div className="componentBlock">
					<h3 className="componentTitle">TESTING</h3>

					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<div className="col-lg-4 col-md-8">

								<Input
									autoFocus
									value={ this.state.username }
									name="username"
									onChange={ this.handleChange }
								  type="text"
									placeholder="Enter your username" />
							</div>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Testing;
