import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Icon.scss";
import uid from "uid";
import hexRgb from "hex-rgb";

import CloseIcon from "./Icons/CloseIcon";
import ArrowBack from "./Icons/ArrowBack";
import ArrowTop from "./Icons/ArrowTop";
import ArrowForward from "./Icons/ArrowForward";
import ArrowDown from "./Icons/ArrowDown";
import CheckMark from "./Icons/CheckMark";
import Menu from "./Icons/Menu";
import Cycling from "./Icons/Cycling";
import LineChart from "./Icons/LineChart";
import Star from "./Icons/Star";
import StarOutlined from "./Icons/StarOutlined";
import StarHalf from "./Icons/StarHalf";
import Bookmark from "./Icons/Bookmark";
import BookmarkOutlined from "./Icons/BookmarkOutlined";
import CloudUpload from "./Icons/CloudUpload";
import CloudDownload from "./Icons/CloudDownload";
import Cloud from "./Icons/Cloud";
import CloudOutlined from "./Icons/CloudOutlined";
import Coffee from "./Icons/Coffee";
import Lock from "./Icons/Lock";
import UnLock from "./Icons/UnLock";
import Time from "./Icons/Time";
import Flash from "./Icons/Flash";
import Loader from "./Icons/Loader";
import Plus from "./Icons/Plus";
import Minus from "./Icons/Minus";
import Cash from "./Icons/Cash";
import Card from "./Icons/Card";
import Cart from "./Icons/Cart";
import Chat from "./Icons/Chat";
import Code from "./Icons/Code";
import Bell from "./Icons/Bell";
import BellOutlined from "./Icons/BellOutlined";
import User from "./Icons/User";
import Refresh from "./Icons/Refresh";
import Settings from "./Icons/Settings";
import Wifi from "./Icons/Wifi";
import Save from "./Icons/Save";
import Sync from "./Icons/Sync";
import Globe from "./Icons/Globe";
import Stop from "./Icons/Stop";
import Search from "./Icons/Search";
import Delete from "./Icons/Delete";
import Home from "./Icons/Home";
import Edit from "./Icons/Edit";
import Copy from "./Icons/Copy";
import Link from "./Icons/Link";
import Clap from "./Icons/Clap";
import Hand from "./Icons/Hand";
import ThumbUp from "./Icons/ThumbUp";
import ThumbDown from "./Icons/ThumbDown";
import RockOn from "./Icons/RockOn";
import Heart from "./Icons/Heart";
import HeartOutlined from "./Icons/HeartOutlined";


class Icon extends Component {
	state = {
		iconId: `icon_${ uid(10) }`,
		size: null,
		color: null,
		opacity: null,
	}

	componentDidMount(){
		const { size, color } = this.props;
		// Get the style from the parent component (color + fontSize)
		if(!size || !color){
			const parent = document.getElementById(this.state.iconId).parentNode;
			const parentStyle = getComputedStyle(parent);
			// Get the font size if there is no size specified
			let iconSize = size;
			// Scale the icon so it look bigger if it get it's size from it's parent fontSize
			if(!size){
				const pxSize = parentStyle["font-size"].split("px")[0] * 1.3;
				iconSize = `${ pxSize }px`;
			}

			// Get the color if there is no color specified
			let iconColor = color ? color : parentStyle["color"];
			let iconOpacity = 1;

			// convert it to a rgba color if it's an hex color
			if(iconColor.split("#").length > 1){
				iconColor = `rgba(${ hexRgb(iconColor, {format: 'array'}).join(", ") })`;
			}

			// If it's a RGBA color
			// get the rgb color and the opacity separately if there is opacity
			if(iconColor.split("rgba").length > 1){
				// get the opacity first
				iconOpacity = Number(iconColor.split(",")[3].split(")")[0]);
				// get the rgb color
				const iconColorNum = iconColor.split("rgba(")[1].split(",").slice(0, 3).join(",");
				iconColor = `rgb(${ iconColorNum })`;
			}

			this.setState({
				size: iconSize,
				color: iconColor,
				opacity: iconOpacity,
			})
		} else {
			this.setState({
				size: size,
				color: color,
				opacity: 1,
			})
		}
	}

	render(){
		// Choose the right icon
		let chosenIcon;
		switch(this.props.type){
			case "close":
			  chosenIcon = <CloseIcon />;
				break;
			case "arrowBack":
			  chosenIcon = <ArrowBack />;
				break;
			case "arrowTop":
				chosenIcon = <ArrowTop />;
				break;
			case "arrowForward":
				chosenIcon = <ArrowForward />;
				break;
			case "arrowDown":
				chosenIcon = <ArrowDown />;
				break;
			case "checkmark":
				chosenIcon = <CheckMark />;
				break;
			case "menu":
				chosenIcon = <Menu />;
				break;
			case "cycling":
				chosenIcon = <Cycling />;
				break;
			case "chart":
				chosenIcon = <LineChart />;
				break;
			case "star":
				chosenIcon = <Star />;
				break;
			case "starOutlined":
				chosenIcon = <StarOutlined />;
				break;
			case "starHalf":
				chosenIcon = <StarHalf />;
				break;
			case "bookmark":
				chosenIcon = <Bookmark />;
				break;
			case "bookmarkOutlined":
				chosenIcon = <BookmarkOutlined />;
				break;
			case "cloudUpload":
				chosenIcon = <CloudUpload />;
				break;
			case "cloudDownload":
				chosenIcon = <CloudDownload />;
				break;
			case "cloud":
				chosenIcon = <Cloud />;
				break;
			case "cloudOutlined":
				chosenIcon = <CloudOutlined />;
				break;
			case "coffee":
				chosenIcon = <Coffee />;
				break;
			case "lock":
				chosenIcon = <Lock />;
				break;
			case "unlock":
				chosenIcon = <UnLock />;
				break;
			case "time":
				chosenIcon = <Time />;
				break;
			case "flash":
				chosenIcon = <Flash />;
				break;
			case "loader":
				chosenIcon = <Loader />;
				break;
			case "plus":
				chosenIcon = <Plus />;
				break;
			case "minus":
				chosenIcon = <Minus />;
				break;
			case "cash":
				chosenIcon = <Cash />;
				break;
			case "card":
				chosenIcon = <Card />;
				break;
			case "cart":
				chosenIcon = <Cart />;
				break;
			case "chat":
				chosenIcon = <Chat />;
				break;
			case "code":
				chosenIcon = <Code />;
				break;
			case "bell":
				chosenIcon = <Bell />;
				break;
			case "bellOutlined":
				chosenIcon = <BellOutlined />;
				break;
			case "user":
				chosenIcon = <User />;
				break;
			case "refresh":
				chosenIcon = <Refresh />;
				break;
			case "settings":
				chosenIcon = <Settings />;
				break;
			case "wifi":
				chosenIcon = <Wifi />;
				break;
			case "save":
				chosenIcon = <Save />;
				break;
			case "sync":
				chosenIcon = <Sync />;
				break;
			case "globe":
				chosenIcon = <Globe />;
				break;
			case "stop":
				chosenIcon = <Stop />;
				break;
			case "search":
				chosenIcon = <Search />;
				break;
			case "delete":
				chosenIcon = <Delete />;
				break;
			case "edit":
				chosenIcon = <Edit />;
				break;
			case "copy":
				chosenIcon = <Copy />;
				break;
			case "home":
				chosenIcon = <Home />;
				break;
			case "link":
				chosenIcon = <Link />;
				break;
			case "clap":
				chosenIcon = <Clap />;
				break;
			case "hand":
				chosenIcon = <Hand />;
				break;
			case "thumbUp":
				chosenIcon = <ThumbUp />;
				break;
			case "thumbDown":
				chosenIcon = <ThumbDown />;
				break;
			case "rockOn":
				chosenIcon = <RockOn />;
				break;
			case "heart":
				chosenIcon = <Heart />;
				break;
			case "heartOutlined":
				chosenIcon = <HeartOutlined />;
				break;

	 		default:
			  console.error(`${ this.props.type } is not a valid icon.`);
		}

		// Add the props to the element if the icon exist
		let elementWithProps = null;
	  if(chosenIcon){
			elementWithProps = React.cloneElement(
				chosenIcon,
				{
					size: this.state.size,
					color: this.state.color,
					isSpinning: this.props.isSpinning,
				}
			);
		}

		// Check if the icon should be spinning
		let isSpinning = "";
		// Put the default spin to the loader icon!
	  if(this.props.type === "loader"){
			if(this.props.isSpinning !== false){
				isSpinning = styles.isSpinning;
			}
		}
		// Otherwise, check if it have the isSpinning props
		else if(this.props.isSpinning === true){
			isSpinning = styles.isSpinning;
		}


		return (
			<span
				id={ this.state.iconId }
				className={ `${ styles.iconSvg } ${ isSpinning }` }
				style={{ opacity: this.state.opacity }}>
				{ elementWithProps }
			</span>
		);
	}
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
	// isSpinning: PropTypes.boolean,
};

export default Icon;
