import React from 'react';
import { Container, Row, Col } from "flwww";

const FormatLayouts = (props) => {
	return (
		<div>
			<div style={{ position: "relative" }}>
				<Container>
					<Row>
						{
							[1,1,1,1,1,1,1,1,1,1,1,1].map(col => (
								<Col grid={ `${ col }` }>
									<div className="displayBgCol"></div>
								</Col>
							))
						}
					</Row>
				</Container>

				<div className="rowOverlay">
					<Container>
						<Row>
							{
								props.gridArray.map(col => (
									<Col grid={ `${ col }` }>
										<div className="displayCol">col-{ col }</div>
									</Col>
								))
							}
						</Row>
					</Container>
				</div>
			</div>
		</div>
	)
}

export default FormatLayouts;
