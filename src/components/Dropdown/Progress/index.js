import React from 'react';
import styles from "./Card.module.scss";
import DocBlock from "../DocBlock";
import ApiTable from "../ApiTable";
import { codeString1, codeString3 } from "./CodeString";
import { ComponentsToRender1, ComponentsToRender3 } from "./ComponentsToRender";
import apiData from "./apiData";

import CarbonAds from "../../../CarbonAds";

const Progress = (props) => {

	return (
		<div className="fadeIn">
			<CarbonAds />

			<h1 className="componentTitle">Default Progress</h1>

				<DocBlock
					sectionName="default-progress"
					subTitle="Default Progress."
					codeString={ codeString1 }>
					<ComponentsToRender1 />
				</DocBlock>

				<DocBlock
					sectionName="progress-custom"
					subTitle="Progress customization."
					codeString={ codeString3 }>
					<ComponentsToRender3 />
				</DocBlock>

				<ApiTable
					apiData={ apiData } />
		</div>
	)
}

export default Progress;
