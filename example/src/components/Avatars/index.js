import React from "react";
import { Avatar, Container, Card, Badge } from "flwww";
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
					  src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
						size="50px"
						style={{ margin: "10px", borderRadius: "4px" }} />

					<Avatar
					  src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
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
