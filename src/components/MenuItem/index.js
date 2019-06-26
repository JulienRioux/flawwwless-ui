import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./MenuItem.scss";
import Menu from "../Menu";
import styled from "styled-components";
import { primaryColor } from "../../styles";

import ThemeContext from "../../context/themeContext";

export class MenuItem extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	state = {
		isHovered: false,
	}

	handleHoverOn = () => {
		// Handle menuItem hoover on
		this.setState({ isHovered: true });
	}

	handleHoverOff = () => {
		// Handle menuItem hoover off
		this.setState({ isHovered: false });
	}

	componentDidMount(){
		// Add an event listener when a Link is clicked inside the MenuItem so the link work when the user click on the entire menuItem div
		const allMenuItems = document.querySelectorAll(`.${ styles.menuItemDiv }`);
		allMenuItems.forEach(item => {
			item.addEventListener("click", () => {
				if(item.firstElementChild){
					item.firstElementChild.click();
				}
			})
		})
	}


	render(){
		const { isSelected, mainColor } = this.props;
		const isSelectClass = isSelected ? styles.selectedMenuItem : "";

		return (
			<ThemeContext.Consumer>
				{
					context => {
						// Get the right bg color for the menu (if custom theming)
						let mainColor = primaryColor;
						if(context){
							mainColor = context.primaryColor;
						}

						let menuItemStyle;
						if(isSelected){
							menuItemStyle = {
								backgroundColor: mainColor + "33",
								color: mainColor,
							}
						}

						// Create the hover style object
						const hoverStyle = this.state.isHovered ? {
							backgroundColor: mainColor + "22"
						} : {};

						// Change the color of the children if it's the item selected
						const childCopy = isSelected ? React.cloneElement(this.props.children, {
							style: {
								color: mainColor
								// animation: styles
							}
            }) : this.props.children;

						return (
							<div
								className={ `${ styles.menuItemDiv } ${ styles[".menuItemDiv a"] } ${ isSelectClass }` }
								style={{ ...menuItemStyle, ...hoverStyle }}
								onClick={ () => this.props.changeState(this.props.uniqueKey) }
								onMouseEnter={ this.handleHoverOn }
								onMouseLeave={ this.handleHoverOff }
								>
									<span className={ styles.menuItemWrapper }>{ childCopy }</span>
							</div>
						)
					}
				}
			</ThemeContext.Consumer>
		)
	}
}

export default MenuItem;
