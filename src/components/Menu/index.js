import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from "../MenuItem";
import styles from "./Menu.css";

class Menu extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		style: PropTypes.object
	}
	state = {
		selectedItem: this.props.defaultSelectedItem
	}

	changeState = (uniqueKey) => {
		this.setState({ selectedItem: uniqueKey });
	}

	static Item = Item;

	render(){
		const { children } = this.props;
		const { selectedItem } = this.state;
		// Pass props to children
		const childrenWithProps = React.Children.map(children, child => {
			// Check if its the selected menu item
			if(child.props.uniqueKey === selectedItem){
				return React.cloneElement(child, {
					changeState: this.changeState,
					isSelected: true
				});
			}
			return React.cloneElement(child, {
				changeState: this.changeState,
				isSelected: false
			});
		}

		);
		return (
			<div
				{ ...this.props }
				className={ styles.menuDiv } >
			  { childrenWithProps }
			</div>
		)
	}
}

export default Menu;
