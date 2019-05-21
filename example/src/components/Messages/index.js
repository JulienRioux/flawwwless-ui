import React, { Component } from 'react';
import { Button, Card, message } from 'flawwwless-library';


class Messages extends Component {

	showNormalMessage = () => {
		const msg = message("This is a normal message");
		return msg
	}

	showSuccessMessage = () => {
		const msg = message("This is a normal message", "success");
		return msg
	}

	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Messages</h3>
					<p className="componentDescr">To trigger an message.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Button onClick={ this.showNormalMessage }>Normal message</Button>
							<Button type="success" onClick={ this.showSuccessMessage }>Success Message</Button>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Messages;
