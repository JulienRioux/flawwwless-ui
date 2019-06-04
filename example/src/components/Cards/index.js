import React from 'react';
import { Button, Card } from 'flawwwless-library'


const Cards = props => {
	return (
		<div className="componentBlock">
			<div style={{ paddingBottom: "4rem" }} className="container">
				<h3 className="componentTitle">Card</h3>
				<p className="componentDescr">Simple rectangular container.</p>
				<div className="row">
					<div className="col-md-6">
						<Card title="Title of the card">
							<p>Dolore velit legam anim labore nisi esse quis cillum dolore export illum enim
								ipsum aliqua esse quorum duis minim tamen</p>
						</Card>
					</div>
					<div className="col-md-6">
						<Card border="none" padding="2rem 4rem 1.8rem" style={{ boxShadow: "0 6px 20px #0002" }}>
							<h3 style={{ marginTop: ".5rem" }}>I don't have title!</h3>
							<p>Illum sint quorum multos tempor quis esse duis sint irure summis esse</p>
							<div className="bottomRightCardBtn">
							  <span  style={{ marginRight: ".5rem" }}><Button>Go back</Button></span>
							  <Button type="success">Submit</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>


			<div className="noBorderCard">
				<div className="container">
					<p className="componentDescr">No border Card.</p>
					<div className="row">
						<div className="col-md-6">
							<Card
								extra={ <a href="#">more</a> }
								title="Title of the card"
								border="none">
								<p>Legam minim aliqua labore elit labore multos quae irure tamen export legam duis
									dolor fore aliqua illum summis anim culpa quorum culpa multos irure esse</p>
								<div className="bottomRightCardBtn">
								  <Button type="primary" round="true">Continue</Button>
								</div>
							</Card>
						</div>

						<div className="col-md-6">
							<Card border="none">
								<h3 style={{ marginTop: ".5rem" }}>A card with shadow</h3>
								<p>Quorum dolor nulla illum quis quid quorum dolore export fugiat aliqua illum
								nulla cillum legam aute elit nisi fore magna amet sint noster veniam quis noster
								fugiat anim dolore dolore duis dolore ipsum quid quae dolore labore duis multos
								summis</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
			<div style={{ paddingTop: "6rem" }} className="container">
				<p className="componentDescr">Shadow Card.</p>
				<div className="row">
					<div className="col-md-6">
						<Card border="shadow">
							<p>Quorum dolor nulla illum quis quid quorum dolore export fugiat aliqua illum
							nulla cillum legam aute elit nisi fore magna amet sint noster veniam quis noster
							fugiat anim dolore dolore duis dolore ipsum quid quae dolore labore duis multos
							summis</p>
						</Card>
					</div>

					<div className="col-md-6">
						<Card
							extra={ <a href="#">menu</a> }
							title="Title of the card"
							border="shadow">
							<p>Legam minim aliqua labore elit labore multos quae irure tamen export legam duis
								dolor fore aliqua illum summis anim culpa quorum culpa multos irure esse</p>
							<div className="bottomRightCardBtn">
								<Button type="primary" round="true">Continue</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards;
