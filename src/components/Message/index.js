import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from "./Messages.scss";
import CheckMark from "../Icon/Icons/iconsSvg/CheckMarkGreen.svg";


const message = (text, type, time=2500) => {
	// Add an animation delay of 0.2s
	const animationDelay = 200;
	// Remove the alert from the dom
	// const elem = document.querySelectorAll(`.${ styles.messageWrapper }`);
	// if(elem[0]){
	// 	console.log(elem);
	// 	elem.forEach((item) => {
	// 		item.parentNode.removeChild(item);
	// 	})
	// }


	// const elem = document.querySelectorAll(`.${ styles.messageWrapper }`);
	// if(elem[0]){
	// 	if(elem[0].firstChild){
	// 		// elem[0].removeChild(elem[0].firstChild)
	// 		elem.forEach(item => {
	// 			console.log(item.firstChild);
	// 			item.removeChild(item.firstChild);
	// 		})
	// 	}
	// }

	const elem = document.querySelector(`.${ styles.messageWrapper }`);
	// console.log(elem);
	if(elem){
		while(elem.firstChild){
			console.log("ELEM", elem.firstChild);
		  elem.removeChild(elem.firstChild);
		}
		// if(elem.firstChild){
		// 	elem.removeChild(elem.firstChild)
		// 	// elem[0].removeChild(elem[0].firstChild)
		// 	// elem.forEach(item => {
		// 	// 	console.log(item.firstChild);
		// 	// 	item.removeChild(item.firstChild);
		// 	// })
		// }
	}

	// Create the outer div of the message (used to center the message)
	const outerNode = document.createElement("div");
	outerNode.className = styles.messageWrapper;
	// Create the div of the message
	const node = document.createElement("div");
	node.className = styles.messageDiv;

	// Check the message type to show the right icon
	if(type){
		clearTimeout(endAnim);
		clearTimeout(removeMess);
		const domImg = document.createElement("img");
		if(type === "success"){
			domImg.src = CheckMark;
		}
		domImg.className = styles.msgIcon;
		node.appendChild(domImg);
	}

	// Add the text to the message
	const textnode = document.createTextNode(text);
	node.appendChild(textnode);
	outerNode.appendChild(node);
	document.body.appendChild(outerNode);

	// Set a timeout to remove the message
	const removeMess = setTimeout(() => {
		const elem = document.querySelector(`.${ styles.messageWrapper }`);
		if(elem){
			elem.parentNode.removeChild(elem);
		}
	}, time);

	// Set a timeout to add the fadeOut animation
	const endAnim = setTimeout(() => {
		const msgDiv = document.querySelector(`.${ styles.messageWrapper }`);
		if(msgDiv){
			msgDiv.className = `${ styles.messageWrapper } ${ styles.msgIsFadingOut }`;
		}
	}, time - animationDelay);
}

export default message;
