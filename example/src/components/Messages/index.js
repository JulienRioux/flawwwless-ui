import React, { Component } from 'react';
import { Button, Card, message } from "flwww";


class Messages extends Component {

	showNormalMessage = () => {
		const msg = message("This is a normal message.");
		return msg;
	}

	showSuccessMessage = () => {
		const msg = message("This is a success message.", "success", 1000000);
		return msg;
	}

	showErrorMessage = () => {
		const msg = message("This is a error message.", "error");
		return msg;
	}

	showQuestionMessage = () => {
		const msg = message("This is a question message.", "question");
		return msg;
	}

	showNoIconMessage = () => {
		const msg = message("This is a message without icon. This message last 5 seconds!", "noIcon", 5);
		return msg;
	}

	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Messages</h3>
					<p className="componentDescr">To trigger an message.</p>
					<Card>
						<div style={{ margin: ".5rem 0" }} className="buttonBlock">
							<Button type="primary" onClick={ this.showNormalMessage }>Normal message</Button>
							<Button type="success" onClick={ this.showSuccessMessage }>Success Message</Button>
							<Button type="danger" onClick={ this.showErrorMessage }>Error Message</Button>
							<Button type="question" onClick={ this.showQuestionMessage }>Question Message</Button>
							<Button outlined type="primary" onClick={ this.showNoIconMessage }>Message without icon</Button>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Messages;
