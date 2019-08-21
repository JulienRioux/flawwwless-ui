import React from 'react';
import { Statistic, Card, Container, Col, Row } from "flwww";

const Statistics = (props) => {

	return (
		<Container>
			<Card>
				<h1>Statistic</h1>

			  <Row>
					<Col grid="md-6">
						<Statistic
							title="Tesla Inc"
							value={ 256.59 }
							prevValue={ 235.20 }
							currency="usd"
							// valueClassName="customValueClass"
						/>
					</Col>

					<Col grid="md-6">
						<Statistic
							title="Bitcoin"
							value={ 9099.76 }
							prevValue={ 9129.14 }
							currency="€" />
					</Col>
				</Row>

			</Card>
		</Container>
	)
}

export default Statistics;
