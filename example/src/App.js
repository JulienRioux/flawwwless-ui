import React, { Component } from 'react';
import "./App.css";

import { Button, Card, Modal, Menu } from 'flawwwless-library'

import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import DesktopNavbar from "./components/DesktopNavbar";
import Modals from "./components/Modals";


export default class App extends Component {

  render () {
    return (
      <div className="App">
				<DesktopNavbar />
				<Buttons />
			  <Cards />
				<Modals />

				<div className="container">
					<div className="componentBlock">
						<h3 className="componentTitle">Other Component!</h3>
						<p className="componentDescr">Do something else. </p>
						<Menu
						  style={{ width: 250 }}
							defaultSelectedItem={ "3" }>
						  <Menu.Item
							  uniqueKey= "1">
								<a href="/">Menu item 1</a>
							</Menu.Item>
							<Menu.Item
							  uniqueKey={ "2" }>Menu item 2</Menu.Item>
							<Menu.Item
							  uniqueKey={ "3" }>Menu item 3</Menu.Item>
							<Menu.Item
							  uniqueKey={ "4" }>Menu item 4</Menu.Item>
							<Menu.Item
							  uniqueKey={ "5" }>Menu item 5</Menu.Item>
						</Menu>
					</div>
				</div>
      </div>
    )
  }
}
