import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./MenuItem.css";
import Menu from "../Menu";

export class MenuItem extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	componentDidMount(){
		// Add an event listener when a Link is clicked inside the MenuItem so the link work when the user click on the entire menuItem div
		document.querySelector(`.${ styles.menuItemDiv }`).addEventListener("click", () => {
			document.querySelector(`.${ styles.menuItemDiv } a`).click();
		})
	}

	render(){
		const { isSelected } = this.props;
		const isSelectClass = isSelected ? styles.selectedMenuItem : "";
		return(
			<div
			  className={ `${ styles.menuItemDiv } ${ styles[".menuItemDiv a"] } ${ isSelectClass }` }
				onClick={ () => this.props.changeState(this.props.uniqueKey) }>
				{ this.props.children }
			</div>
		)
	}
}

export default MenuItem;
