import React from "react";
import { Avatar, Container, Card } from "flwww";
import "./Avatar.css";

const Avatars = (props) => {
	return (
		<Container>
			<Card>
			  <h1>Avatar</h1>
				<div className="avatarWrapper">
					<Avatar
						src="https://images.unsplash.com/photo-1553511395-d1ab463dbe1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
						style={{ margin: "10px" }} />

				  <Avatar
					  src="https://images.unsplash.com/photo-1562206932-a4bc8615c1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
						size="60px"
						style={{ margin: "10px" }} />

					<Avatar
					  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
						size="60px"
						style={{ margin: "10px", borderRadius: "4px" }} />

					<Avatar
					  src="https://images.unsplash.com/flagged/photo-1552054814-8c580ce130d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						style={{ margin: "10px", borderRadius: "0" }} />

					<Avatar
					  initials="V"
						style={{ margin: "10px" }} />

					<Avatar
					  initials="JR"
						style={{ margin: "10px" }} />

					<Avatar
					  initials="Tim"
						style={{ margin: "10px" }} />

					<Avatar
					  initials="John"
						style={{ margin: "10px" }} />

					<Avatar
					  initials="Julia"
						initialsStyle={{ color: "#fff" }}
						style={{ margin: "10px", background: "#006eff" }}  />

					<Avatar
					  initials="Sammy"
						style={{ margin: "10px" }} />

				</div>
			</Card>
		</Container>
	)
}

export default Avatars;
