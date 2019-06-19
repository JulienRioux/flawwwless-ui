import React from 'react';
import { Container, Row, Col } from "flwww";

const FormatLayouts = (props) => {
	return (
		<div>
			<Container>
				<div style={{ position: "relative" }}>
					<Row>
						{
							[1,1,1,1,1,1,1,1,1,1,1,1].map(col => (
								<Col grid={ `${ col }` }>
									<div className="displayBgCol"></div>
								</Col>
							))
						}
					</Row>

					<div className="rowOverlay">
						<Row>
							{
								props.gridArray.map(col => (
									<Col grid={ `${ col }` }>
										<div className="displayCol">col-{ col }</div>
									</Col>
								))
							}
						</Row>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default FormatLayouts;
