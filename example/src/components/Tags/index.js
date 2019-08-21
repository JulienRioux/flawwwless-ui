import React from 'react';
import { Container, Card, Tag } from "flwww";

const Tags = (props) => {

	return (
		<Container>
			<Card>
				<h1>Tag (Hex color only!)</h1>

				<div>
				  <Tag>Tag 1</Tag>
					<Tag>Tag 2</Tag>
					<Tag>Tag 3</Tag>
				</div>

				<div style={{ marginTop: "30px" }}>
				  <Tag
					  style={{ borderRadius: "12px" }}
					  color="#ff2c2b">#ff2c2b</Tag>
					<Tag color="#01b875">#01b875</Tag>
					<Tag color="#8956ff">#8956ff</Tag>
					<Tag color="#00bcd4">#00bcd4</Tag>
				</div>
			</Card>
		</Container>
	)
}

export default Tags;
