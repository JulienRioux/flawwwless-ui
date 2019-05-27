import React, { Component } from 'react';
import "./App.css";
import { Link } from "react-router-dom";
import { Button, Card, Modal, Menu } from 'flawwwless-library'

import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import DesktopNavbar from "./components/DesktopNavbar";
import Modals from "./components/Modals";
import Icons from "./components/Icons";
import Messages from "./components/Messages";
import Inputs from "./components/Inputs";
import Tables from "./components/Tables";


export default class App extends Component {

  render () {
    return (
      <div className="App">
				<DesktopNavbar />

				<Tables />
			  <Inputs />
				<Icons />
			  <Modals />
				<Messages />
				<Buttons />
			  <Cards />

				<div className="container">
					<div className="componentBlock">
						<h3 className="componentTitle">Other Component!</h3>
						<p className="componentDescr">Do something else. </p>

					  <Card style={{ padding: 0 }}>
							<Menu
							  style={{ width: 250, padding: "1.2rem 0" }}
								defaultSelectedItem={ "3" }>
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
									<button onClick={ () => console.log("BUTTON") }>Menu item 3</button>
								</Menu.Item>
								<Menu.Item
								  uniqueKey={ "4" }>Menu item 4</Menu.Item>
								<Menu.Item
								  uniqueKey={ "5" }>Menu item 5</Menu.Item>
							</Menu>
						</Card>
					</div>
				</div>
      </div>
    )
  }
}
