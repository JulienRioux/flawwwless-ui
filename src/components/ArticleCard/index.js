import React from "react";
import styles from "./ArticleCard.scss";
import GetContext from "../GetContext";

const ArticleCard = (props) => {

	// Add links
	// Get the color from the context!
	const { primaryColor } = props.context;

	const titleClassName = props.titleClassName ? props.titleClassName  : "";
	console.log("titleClassName", props.titleClassName);

	return (
		<div
			style={ props.style }
			className={ `${ styles.articleWrapper } ${ props.className ? props.className : "" }` } >
			<div
				style={{ backgroundImage: `url( ${ props.img })` }}
				className={ styles.articleImg }>
			</div>

			<div className={ styles.articleText  }>
				<div className={ styles.articleTitleAndCat  }>
					<h6
						style={{ color: primaryColor }}
						className={ `${ styles.category }` }>
						{ props.category }
					</h6>

					<h4
						// style={{ textDecorationColor : primaryColor }}
						className={ `${ styles.title } ${ titleClassName }` }
					>
						{ props.title }
					</h4>
				</div>

				<div className={ styles.author }>
					{ props.author }
					{
						props.author && props.time && (
							<span className={ styles.authorAndTimeSeparator }>•</span>
						)
					}
					{ props.time }
				</div>
			</div>
		</div>
	)
}

export default GetContext(ArticleCard);
