const codeString1 = `import React from "react";
import { DefaultProgress } from "flwww";

const MyComponent = (props) => {

  return (
		<div>
			<DefaultProgress
				prcnt={ Math.round(Math.random() * 100) }
			/>
		</div>
  )
}

export default MyComponent;`;


const codeString3 = `import React from "react";
import { DefaultProgress } from "flwww";

const MyComponent = (props) => {

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

export default MyComponent;`;


export { codeString1, codeString3 };
