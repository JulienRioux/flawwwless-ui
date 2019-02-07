import React from 'react';
import { Button, Navbar } from 'flawwwless-library';
import "./DesktopNavbar.css";
import { Link } from "react-router-dom";
import flawwwlessIcon from "../../img/Flawwwless-ui-logo.png";

const DesktopNavbar = props => {
	return (
		<Navbar>
		  <div className="container">
				<Link to="#" className="navLogo">
				  {/*<img className="flawwwlessLogo" src={ flawwwlessIcon } alt=""/>*/}
					 <span>Flawwwless-ui</span>
				</Link>
			</div>
		</Navbar>
	)
}


export default DesktopNavbar;
