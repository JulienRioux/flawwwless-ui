import React, { Component } from 'react';
import Icon from "../flwwwIcon";
import styles from "./Rating.scss";
import GetContext from "../GetContext";

class Rating extends Component {
	// state={
	// 	rating: null,
	// }
	//
	// handleRatingChange = (rating) => {
	// 	this.setState({ rating });
	// }

	render(){
		// Get the color from the context!
		const { primaryColor } = this.props.context;
		const { color } = this.props;

		// Check if there is an color override
		const starColor = color ? color : primaryColor;

		return(
			<div
			  style={{ color: starColor }}
			  className={ styles.ratingDiv }>
			  {
					[1,2,3,4,5].map((score) => {
						const containRating = this.props.rating >= score;
						const starClass = containRating ? styles.containRating : "";
						const currentRatingClass = score === this.props.rating ? styles.currentRating : "";
						return(
							<div
							  onClick={ () => this.props.handleRatingChange(score) }
							  className={ `${ styles.starButton } ${ starClass } ${ currentRatingClass }` }
							  key={ score }>
							  <Icon
								  size={ this.props.size }
								  type="star"
								/>
							</div>
						)
					})
				}
			</div>
		)
	}
}

Rating.defaultProps = {
  size: "33px",
	handleRatingChange: () => {},
}

export default GetContext(Rating);
