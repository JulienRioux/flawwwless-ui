import React from 'react';
import { ArticleCard, Container, Col, Row, Card } from "flwww";
// import styles from "./ArticleCards.scss";
import "./ArticleCards.css";

const fakeAuthorName = ["Nyle Webb", "Talha Chapman", "Waqas Vickers", "Jolie Guzman"];

const ArticleCards = (props) => {

	const articles = [
		{
			img: "https://images.unsplash.com/photo-1530447920184-b88c8872?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
			title: "The Shocking Revelation of AI.",
			category: "Artificial intelligence",
			author: fakeAuthorName[Math.floor(Math.random() * fakeAuthorName.length)],
			mainLink: "https://futurism.com/scientists-ai-inventor-patent",
			time: `${ Math.round(Math.random() * 60) } min ago`,
		},
		{
			img: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
			title: "Scientists Are Trying to List AI as the Inventor on a New Patent",
			category: "Science and inventions",
			author: fakeAuthorName[Math.floor(Math.random() * fakeAuthorName.length)],
			mainLink: "https://futurism.com/scientists-ai-inventor-patent",
			time: `${ Math.round(Math.random() * 60) } min ago`,
		},
		{
			img: "https://images.unsplash.com/photo-1524487225818-c6acacb24d4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80",
			title: "YouTube Accidentally Removed Robot Battle Videos for “Animal Cruelty”",
			category: "Science and inventions",
			author: fakeAuthorName[Math.floor(Math.random() * fakeAuthorName.length)],
			mainLink: "https://futurism.com/scientists-ai-inventor-patent",
			time: `${ Math.round(Math.random() * 60) } min ago`,
		},
		{
			img: "https://images.unsplash.com/photo-1471289660181-7feae98d61ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
			title: "Agriculture and health industries adopt blockchain technology.",
			category: "Health",
			author: fakeAuthorName[Math.floor(Math.random() * fakeAuthorName.length)],
			mainLink: "https://futurism.com/scientists-ai-inventor-patent",
			time: `${ Math.round(Math.random() * 60) } min ago`,
		},
	];

	// console.log( styles.titleClass);

	return (
		<Container>
		  <Card>
			  <h1>ArticleCard</h1>
				<Row>
				  {
						articles.map((article, i) => (
							<Col
								key={ i }
								grid="lg-6">
								<a
								  href={ article.mainLink }
									target="_blank"
									rel="noopenner noreferrer"
								>
									<ArticleCard
										// titleClassName={ "titleClass" }
									  style={{ marginBottom: "25px" }}
									  img={ article.img }
										title={ article.title }
										category={ article.category }
										author={ article.author }
										time={ article.time }
									/>
								</a>
							</Col>
						))
					}
				</Row>
			</Card>
		</Container>
	)
}

export default ArticleCards;
