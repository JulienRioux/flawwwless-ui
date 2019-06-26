import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Menu } from "flwww";

class Menus extends Component {
	state = {
		selectedItem: window.location.pathname.split("/")[1],
	}

	componentDidUpdate(prevProps) {
		if(this.props.location !== prevProps.location) {
			// Get the right selected item for the actual path
			this.setState({ selectedItem: window.location.pathname.split("/")[1] });
		}
	}

	render(){
		return (
			<div className="container">
				<div className="componentBlock">
					<h3 className="componentTitle">Menu</h3>
					<p className="componentDescr">Simple menu </p>

					<Card style={{ padding: 0 }}>
						<Menu
							style={{ width: 250, padding: "1.2rem 0" }}
							selectedItem={ this.state.selectedItem }
						>
							<Menu.Item
								uniqueKey= "">
								<Link to="/">Menu item 1</Link>
							</Menu.Item>
							<Menu.Item
								uniqueKey={ "2" }>
								<Link to="/2">Menu item 2</Link>
							</Menu.Item>
							<Menu.Item
								uniqueKey={ "3" }>
								<Link to="/3">Menu item 3</Link>
							</Menu.Item>
							<Menu.Item
								uniqueKey={ "4" }>
								<Link to="/4">Menu item 4</Link>
							</Menu.Item>
							<Menu.Item
								uniqueKey={ "5" }>
								<Link to="/5">Menu item 5</Link>
							</Menu.Item>
							<Menu.Item
								uniqueKey={ "6" }>
								<button>Menu item 6</button>
							</Menu.Item>
						</Menu>
					</Card>
				</div>
			</div>
		)
	}
}

export default Menus;
