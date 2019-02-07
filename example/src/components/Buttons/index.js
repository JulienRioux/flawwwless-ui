import React from 'react';
import { Button, Card } from 'flawwwless-library'


const Buttons = props => {
	return (
		<div className="container">
			<div className="componentBlock">
				<h3 className="componentTitle">Button</h3>
				<p className="componentDescr">To trigger an operation.</p>
				<Card>
					<div style={{ margin: ".5rem 0" }} className="buttonBlock">
						<Button onClick={ () => alert("Button clicked!") }>Default</Button>
						<Button type="primary">Primary</Button>
						<Button type="success">Success</Button>
						<Button type="danger">Danger</Button>
					</div>
				</Card>
				<p style={{ marginTop: "3rem"}} className="componentDescr">Rounded buttons.</p>
				<Card>
					<div style={{ margin: ".5rem 0" }} className="buttonBlock">
						<Button onClick={ () => alert("Button clicked!") } round="true">Default</Button>
						<Button type="primary" round="true">Primary</Button>
						<Button type="success" round="true">Success</Button>
						<Button type="danger" round="true">Danger</Button>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Buttons;
