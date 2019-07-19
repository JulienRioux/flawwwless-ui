import React, { Component } from 'react';
import { RadialProgress, DefaultProgress, Container, Card } from "flwww";


class ProgressComponent extends Component {
	state = {
		username: "",
	}



	render(){
		return (
			<Container>
				<Card>
					<h1>RadialProgress</h1>
					<RadialProgress
						prcnt={ Math.round(Math.random() * 100) }
						// strokeColor={ "#6600ff" }
						size={ "130px" }
						// square
					/>

					<h1>Progress</h1>
					<div style={{ width: "250px" }}>
						<DefaultProgress
							// strokeColor={ "#ff4444" }
							prcnt={ Math.round(Math.random() * 100)  }
							// square
						/>
					</div>
				</Card>
			</Container>
		)
	}
}

export default ProgressComponent;
