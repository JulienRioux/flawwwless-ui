import React from "react";
import styles from "./Badge.scss";

const Badge = (props) => {

	return (
		<div style={{ position: "relative" }}>
			{ props.children }
			<div className={ styles.badge }>BADGE</div>
		</div>
	)
}


export default Badge;
