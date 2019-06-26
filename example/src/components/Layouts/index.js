import React from 'react';
import FormatLayouts from "./FormatLayouts";


const Layouts = (props) => {

	return (
		<div style={{ margin: "4rem 0" }}>

			<FormatLayouts gridArray={ [12] } />

			<FormatLayouts gridArray={ [6, 6] } />

			<FormatLayouts gridArray={ [4, 4, 4] } />

			<FormatLayouts gridArray={ [3, 3, 3, 3] } />

			<FormatLayouts gridArray={ [7, 5] } />

			<FormatLayouts gridArray={ [2, 9] } />

			<FormatLayouts gridArray={ [] } />
		</div>
	)
}


export default Layouts;
