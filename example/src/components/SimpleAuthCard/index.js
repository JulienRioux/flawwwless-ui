import React, { Component } from 'react';
import { Container, SimpleAuth, Card, Button } from "flwww";

class SimpleAuthCard extends Component {
	state = {
    authIsVisible: false,
  }

	toggleModal = () => {
    this.setState(prevState => ({ authIsVisible: !prevState.authIsVisible }));
  }



	render(){
		return (
			<Container>
			  <Card>
					<h1>Firebase Auth</h1>
					<div style={{ padding: "1rem 0" }}>
						<Button
							type="primary"
							onClick={ this.toggleModal }>Firebase auth</Button>

					  <SimpleAuth
							isVisible={ this.state.authIsVisible }
							toggleModal={ this.toggleModal } />
					</div>
				</Card>

			</Container>
		)
	}
}

export default SimpleAuthCard;
