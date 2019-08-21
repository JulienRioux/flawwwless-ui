import React, { Component } from 'react';
import { Badge, Avatar, Button } from "flwww";
import "./BadgeCount.css";

class BadgeCount extends Component {
	state = {
		notifCounter: 1,
	}

	addNotif = () => {
		this.setState(prevState => ({
			notifCounter: prevState.notifCounter + 1,
		}));
	}

	removeNotif = () => {
		// Check if the notifCounter is > 0
		if(this.state.notifCounter > 0){
			this.setState(prevState => ({
				notifCounter: prevState.notifCounter - 1,
			}));
		}
	}

	render(){
		return (
			<div className="badgeCountDiv">
				<div>
					<Badge count={ this.state.notifCounter }>
						<Avatar
						  src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
						  size="50px" />
					</Badge>
				</div>

				<div style={{ marginTop: "20px" }}>
					<Button
					  round
						onClick={ this.addNotif }
					  type="success">Plus</Button>
					<Button
					  round
						disabled={ this.state.notifCounter < 1 }
						onClick={ this.removeNotif }
						style={{ marginLeft: "10px" }}
					  type="danger">Minus</Button>
				</div>
			</div>
		)
	}
}

export default BadgeCount;
