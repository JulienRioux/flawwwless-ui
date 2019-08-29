import React, { Component  } from 'react';
import { Rating, Container, Card } from "flwww";


class Ratings extends Component {
	state={
		rating: null,
	}

	handleRatingChange = (rating) => {
		console.log(`Rating: ${ rating }/5`);
		this.setState({ rating });
	}

	render(){

		return(
			<Container>
				<Card>
					<h1>Rating</h1>
				  <Rating
						color={ "#fadb14" }
						// size={ "20px" }
						rating={  this.state.rating }
						handleRatingChange={ this.handleRatingChange }
						isStatic
					/>
				</Card>
			</Container>
		)
	}
}

export default Ratings;
