import React from 'react';
import { Link } from "react-router-dom";
import { Container, Dropdown, Button, message, Card } from "flwww";

const Dropdowns = (props) => {

	const elementList = [
		<Link to="/dropdown">Dropdown item 1</Link>,
		<a target="_blank" rel="noopener noreferrer" href="http://www.google.ca/">Dropdown item 2</a>,
		<button onClick={ () => message("Button clicked", "success") }>Dropdown item 3</button>
	];

	return (
		<Container>
			<Card>
				<h1>Dropdown</h1>

			  <div>
					<Dropdown elementList={ elementList }>
					  <Button>Hover me!</Button>
					</Dropdown>

					<span style={{ marginLeft: "30px" }}>
						<Dropdown elementList={ elementList }>
						  <div>Hover me</div>
						</Dropdown>
					</span>

				</div>
			</Card>
		</Container>
	)
}

export default Dropdowns;
