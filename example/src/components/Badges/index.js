import React from 'react';
import { Badge, Card, Container, Avatar } from "flwww";
import BadgeCount from "./BadgeCount";
import DotBadge from "./DotBadge";

const Badges = (props) => {

	return (
		<Container>
			<Card>
				<h1>Badge</h1>

				<Badge
					count={ 5 } >
					<Avatar
						src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						size="50px" />
				</Badge>

				<Badge
					count={ 2 }
					style={{ backgroundColor: "#006eff" }}>
					<Avatar
						style={{ marginLeft: "20px", borderRadius: "4px" }}
						src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
						size="50px" />
				</Badge>

				<Badge count={ 0 }>
					<Avatar
						style={{ marginLeft: "20px" }}
						src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
						size="50px" />
				</Badge>

				<Badge dot>
					<Avatar
						style={{ marginLeft: "20px" }}
						src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80"
						size="50px" />
				</Badge>

				<Badge text="new">
					<Avatar
						style={{ marginLeft: "20px" }}
						src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80"
						size="50px" />
				</Badge>

				<div style={{ marginTop: "40px" }}>
					<BadgeCount />
				</div>

				<div style={{ marginTop: "40px" }}>
					<DotBadge />
				</div>

			</Card>
		</Container>
	)
}

export default Badges;
