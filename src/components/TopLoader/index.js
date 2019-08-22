import React from "react";
import ReactDOM from "react-dom";
import styles from "./TopLoader.scss";
import GetContext from "../GetContext";

const TopLoader = props => {
	const loaderClass = props.loading ? styles.isLoading : styles.noLoader;
	// get the color
	const primaryColor = props.context.primaryColor;

	const loaderStyle = {
		backgroundColor: primaryColor,
		...props.style,
	};

	return (
		<div className={ styles.loaderDiv }>
			<div
			  style={ loaderStyle }
			  className={`${ styles.innerLoader } ${ loaderClass }`}></div>
		</div>
	)
}

// Create the modal portal to hook up to the page
const TopLoaderPortal = (props) => {

	// Check if the portal-root div exist
	let portalRoot = document.getElementById("portal-root");
	// if not, add it to the body
	if(!portalRoot){
		const portalRoot = document.createElement("div");
		portalRoot.id = "portal-root";
		document.body.appendChild(portalRoot);
	}
	// Create a portal
	return ReactDOM.createPortal(
		<TopLoader {...props} />,
		document.getElementById("portal-root")
	)
}

TopLoaderPortal.defaultProps = {
	style: {},
}

export default GetContext(TopLoaderPortal);
