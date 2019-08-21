import React, { Component } from 'react';
import { Badge, Avatar, Button } from "flwww";
import "./DotBadge.css";

class DotBadge extends Component {
	state = {
		showNotif: false,
	}

	toggleNotif = () => {
		this.setState(prevState => ({
			showNotif: !prevState.showNotif,
		}));
	}


	render(){
		const { showNotif } = this.state;
		const toggleText = showNotif ? "Hide" : "Show";
		return (
			<div className="badgeCountDiv">
				<div>
					<Badge dot={ this.state.showNotif }>
						<Avatar
						  src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
						  size="50px" />
					</Badge>
				</div>

				<div style={{ marginTop: "20px" }}>
					<Button
					  round
						onClick={ this.toggleNotif }
					  type="primary">{ toggleText }</Button>
				</div>
			</div>
		)
	}
}

export default DotBadge;
