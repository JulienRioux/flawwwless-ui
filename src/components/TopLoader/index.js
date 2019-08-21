import React from "react";
import styles from "./TopLoader.scss";
import GetContext from "../GetContext";

const TopLoader = props => {
	const loaderClass = props.loading ? styles.isLoading : styles.noLoader;
	// get the color
	const primaryColor = props.context.primaryColor;

	return (
		<div className={ styles.loaderDiv }>
			<div
			  style={{ backgroundColor: primaryColor }}
			  className={`${ styles.innerLoader } ${ loaderClass }`}></div>
		</div>
	)
}

export default GetContext(TopLoader);
