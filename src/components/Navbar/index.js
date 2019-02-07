import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Navbar.css";

class Navbar extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render(){
		const { children } = this.props;
		return (
			<div className={ styles.navbar }>
				{ children }
			</div>
		)
	}
}

export default Navbar;
