import React, { Component } from 'react';
import "./App.css";
import { withRouter } from "react-router-dom";

import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import DesktopNavbar from "./components/DesktopNavbar";
import Modals from "./components/Modals";
import Icons from "./components/Icons";
import Messages from "./components/Messages";
import Inputs from "./components/Inputs";
import Tables from "./components/Tables";
import Drawers from "./components/Drawers";
import Menus from "./components/Menus";
import Layouts from "./components/Layouts";


class App extends Component {

  render () {
    return (
      <div>
				<DesktopNavbar />

				<Layouts />
				<Menus />
			  <Modals />
				<Drawers />
			  <Cards />
				<Tables />
			  <Inputs />
				<Icons />
				<Messages />
				<Buttons />


      </div>
    )
  }
}


export default withRouter(App);
