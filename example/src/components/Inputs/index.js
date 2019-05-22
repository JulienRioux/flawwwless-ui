import React, { Component } from 'react';
import { Button, Card, Input, TextArea } from 'flawwwless-library';
import "./Input.css";


class Inputs extends Component {

	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Input</h3>
					<p className="componentDescr">A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<div className="col-lg-4 col-md-8">

								<Input
									icon="user"
									type="text"
									placeholder="Enter your name" />

								<Input type="text" placeholder="This is a text input" />
								<Input type="number" placeholder="This is a number input" />
								<Input type="search" placeholder="This is a search input" />
								<Input type="password" placeholder="This is a password input" />


							  <TextArea
									rows={ 4 }
									placeholder="This is a textArea" />
							</div>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Inputs;
