import React, { Component } from 'react';
import "./App.css";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, Modal, Menu } from 'flawwwless-library'

import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import DesktopNavbar from "./components/DesktopNavbar";
import Modals from "./components/Modals";
import Icons from "./components/Icons";
import Messages from "./components/Messages";
import Inputs from "./components/Inputs";
import Tables from "./components/Tables";
import Drawers from "./components/Drawers";



class App extends Component {
	state = {
		selectedItem: window.location.pathname.split("/")[1],
	}

	componentDidUpdate(prevProps) {
		if(this.props.location !== prevProps.location) {
			// Get the right selected item for the actual path
			this.setState({ selectedItem: window.location.pathname.split("/")[1] });
		}
	}


  render () {
    return (
      <div className="App">
				<DesktopNavbar />

			  <Modals />
			  <Cards />
			  <Drawers />
				<Tables />
			  <Inputs />
				<Icons />
				<Messages />
				<Buttons />

				<div className="container">
					<div className="componentBlock">
						<h3 className="componentTitle">Other Component!</h3>
						<p className="componentDescr">Do something else. </p>

					  <Card style={{ padding: 0 }}>
							<Menu
							  style={{ width: 250, padding: "1.2rem 0" }}
								selectedItem={ this.state.selectedItem }
							>
							  <Menu.Item
								  uniqueKey= "1">
									<Link to="/1">Menu item 1</Link>
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
      </div>
    )
  }
}


export default withRouter(App);
