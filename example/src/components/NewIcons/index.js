import React from 'react';
import { Icon, Card, Container } from "flwww";
import iconList from "./iconList";
import "./NewIcons.css";


const NewIcons = (props) => {

	return (
		<Container>
			<Card>
				<h1>Icons 2.0</h1>

			  <div><Icon color="#006eff" type="mail"/> email</div>

			  <h1><Icon type="globe"/> Welcome</h1>

			  <h1><Icon type="lineChart"/>Stock Price</h1>

				{
					iconList.map((icon) => (
						<span
							key={ icon }
							className="testIcon">
							<Icon
								// color="#006eff"
								size="50px"
								type={ icon }
							/>
						</span>
					))
				}

			</Card>
		</Container>
	)
}

export default NewIcons;
