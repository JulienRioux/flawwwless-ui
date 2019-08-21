import React, { Component } from 'react';
import { TopLoader, Container, Button } from "flwww";


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

			  <div>
					<Button
					  type="primary"
					  disabled={ this.state.loading }
						loading={ this.state.loading }
					  onClick={ this.fakeLoad }>Click to load</Button>
					<TopLoader
					  loading={ this.state.loading } />
				</div>

			</Container>
		)
	}
}

export default TopLoaders;
