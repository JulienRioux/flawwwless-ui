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
import Testing from "./components/Testing";
import Progress from "./components/Progress";
import Checkboxs from "./components/Checkboxs";


class App extends Component {

  render () {
    return (
      <div>
				{/*<DesktopNavbar />*/}

				<Checkboxs />

				<Progress />

				<Testing />

			  <Layouts />

			  <Buttons />

			  <Messages />

			  <Drawers />

		  	<Modals />

			  <Icons />
				<Menus />
			  <Cards />
				<Tables />
			  <Inputs />

      </div>
    )
  }
}


export default withRouter(App);
