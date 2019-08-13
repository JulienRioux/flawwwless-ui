import React, { Component } from 'react';
import { Container, Card, Tooltip } from "flwww";

class Tooltips extends Component {


	render(){
		return (
			<Container>
			  <Card>
					<h1>Tooltips</h1>
					<Tooltip
						text="I'm a default tooltip!">Hover me!</Tooltip>

					<span style={{ marginLeft: "2rem" }}>
						<Tooltip
							text="I'm a dark tooltip!"
							dark={ true }>Dark tooltip</Tooltip>
					</span>

					<span style={{ marginLeft: "2rem" }}>
						<Tooltip
							text="I'm a bottom tooltip!"
							position="bottom">Bottom tooltip</Tooltip>
					</span>

					<span style={{ marginLeft: "2rem" }}>
						<Tooltip
							text="Here I am, a bottom and dark tooltip!"
							position="bottom"
							dark={ true }>Bottom tooltip</Tooltip>
					</span>
				</Card>

			</Container>
		)
	}
}

export default Tooltips;
