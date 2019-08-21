import React, { Component } from 'react';
import { TopLoader, Container, Button, Card } from "flwww";


class TopLoaders extends Component {
	state = {
		loading: false,
	}

	fakeLoad = () => {
		this.setState({ loading: true });
		const timeout = setTimeout(() => {
			this.setState({ loading: false });
		}, 2000 + Math.random() * 1500);
	}

	render(){
		return(
			<Container>

			  <Card>
					<h1>TopLoader</h1>
					<Button
						type="primary"
						disabled={ this.state.loading }
						loading={ this.state.loading }
						onClick={ this.fakeLoad }>Click to load</Button>
					<TopLoader
						loading={ this.state.loading } />
				</Card>

			</Container>
		)
	}
}

export default TopLoaders;
