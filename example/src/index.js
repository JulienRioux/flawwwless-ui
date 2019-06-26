import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "flwww";

import './index.css';
import App from './App';

const theme = {
	defaultColor: "#079992",
	defaultTextColor: "#262626",
	primaryColor: "#38ada9",
	primaryTextColor: "#262626",
	successColor: "#78e08f",
	successTextColor: "#262626",
	dangerColor: "#b71540",
	dangerTextColor: "#262626",
};

const useTheming = false;

if(useTheming){
	ReactDOM.render(
		<Router>
			<ThemeProvider theme={ theme }>
				<App />
			</ThemeProvider>
	  </Router>
	  , document.getElementById('root'));
} else {
	ReactDOM.render(
		<Router>
			<App />
	  </Router>
	  , document.getElementById('root'));
}
