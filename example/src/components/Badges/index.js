import React from 'react';
import { Badge, Card, Container, Avatar } from "flwww";

const Badges = (props) => {

	return (
		<Container>
			<Card>
				<h1>Badge</h1>

				<Badge>
					<Avatar />
				</Badge>
				
			</Card>
		</Container>
	)
}

export default Badges;
