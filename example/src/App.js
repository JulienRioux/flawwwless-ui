import React, { Component } from 'react';
import "./App.css";
import { withRouter } from "react-router-dom";
import { Container } from "flwww";

import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
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
import Tooltips from "./components/Tooltips";


class App extends Component {

  render () {
    return (
      <div>

				<Container>
					<h1>Flawwwless ui</h1>
				</Container>

				<h2 style={{ textAlign: "center", marginTop: "4rem" }}>Version 2 components (Beta)</h2>

				<div style={{ margin: "4rem 0 8rem 0" }}>
					<Tooltips />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Checkboxs />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Progress />
				</div>


				<h2 style={{ textAlign: "center", marginTop: "12rem" }}>Version 1 components</h2>

				<div style={{ margin: "4rem 0 8rem 0" }}>
					<Testing />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Layouts />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Buttons />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Buttons />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Messages />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Drawers />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Modals />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Icons />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Menus />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Cards />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Tables />
				</div>

				<div style={{ margin: "8rem 0" }}>
					<Inputs />
				</div>

      </div>
    )
  }
}


export default withRouter(App);
