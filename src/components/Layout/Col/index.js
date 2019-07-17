import React, { Component } from "react";
import { gutterSize } from "../layoutParams";
import styles from "./Col.scss";

class Col extends Component {


	render(){
		// Format the right width for the cols
		let colClass;
		if(this.props.grid){
			// Get all the classes inside the grid props
			colClass = this.props.grid.split(" ");
		}

		// init a class list array
		let classString = styles["col"];
		// iterate over the array of class and add the right one
		colClass.forEach(cls => {
			if(cls.split("-").includes("offset")){
				classString += ` ${ styles[cls] }`;
			}
			else {
				classString += ` ${ styles[`col-${ cls }`] }`;
			}
		});

		return (
			<div className={ classString } { ...this.props }>
				{ this.props.children }
			</div>
		)
	}
}

export default Col;
