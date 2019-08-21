import React, { Component } from "react";
import { Col, Row, RadialProgress, DefaultProgress } from "flwww";

const ComponentsToRender1 = (props) => {

  return (
		<div>
			<DefaultProgress
				prcnt={ Math.round(Math.random() * 100) }
			/>
		</div>
  )
}

const ComponentsToRender2 = (props) => {

  return (
    <div style={{ width: "150px" }}>
			<RadialProgress
				prcnt={ Math.round(Math.random() * 100) }
			/>
		</div>
  )
};

const ComponentsToRender3 = (props) => {

  return (
		<div style={{ width: "50%" }}>
			<DefaultProgress
				prcnt={ Math.round(Math.random() * 100) }
				strokeColor={ "#06c755" }
				square
			/>
		</div>
  )
}


export { ComponentsToRender1, ComponentsToRender2, ComponentsToRender3 };
