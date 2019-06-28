import React from 'react';
import { Icon } from "flwww";


const Icons = props => {
	const iconColor = "#0888ff"
	// const iconColor = "rgba(255, 0, 0, .5)";

	return (
		<div className="container">
			<h1 style={{ margin: "4rem 0", color: "#0008" }}>
				<Icon
					color="red"
					type="starOutlined"
					size="5rem" />

			</h1>

			<div style={{ margin: "4rem 0"}}>
				<Icon type="user" />
				username
			</div>

			<h6 style={{ margin: "4rem 0"}}>
				<Icon type="star" />
				Hello World
				<Icon type="time" />
				<Icon type="user" />
				<Icon type="hand" />
			</h6>

			<div className="componentBlock">
				<h3 className="componentTitle">Icon</h3>
				<p className="componentDescr">Semantic vector graphics.</p>
				<div className="iconRow">
					<Icon type="arrowBack" color={ iconColor } />
					<Icon type="arrowTop" color={ iconColor } />
					<Icon type="arrowForward" color={ iconColor } />
					<Icon type="arrowDown" color={ iconColor } />
					<Icon type="close" color={ iconColor } />
					<Icon type="menu" color={ iconColor } />
				</div>

				<div className="iconRow">
				  <Icon type="star" color={ iconColor } />
					<Icon type="starOutlined" color={ iconColor } />
					<Icon type="starHalf" color={ iconColor } />
					<Icon type="checkmark" color={ iconColor } />
					<Icon type="chart" color={ iconColor } />
				  <Icon type="chat" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="lock" color={ iconColor } />
					<Icon type="unlock" color={ iconColor } />
					<Icon type="cloudUpload" color={ iconColor } />
					<Icon type="cloudDownload" color={ iconColor } />
					<Icon type="cloudOutlined" color={ iconColor } />
					<Icon type="cloud" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="bookmark" color={ iconColor } />
					<Icon type="bookmarkOutlined" color={ iconColor } />
				  <Icon type="coffee" color={ iconColor } />
					<Icon type="time" color={ iconColor } />
					<Icon type="flash" color={ iconColor } />
					<Icon type="loader" color={ iconColor } />
				</div>

				<div className="iconRow">
				  <Icon type="plus" color={ iconColor } />
					<Icon type="minus" color={ iconColor } />
					<Icon type="cash" color={ iconColor } />
					<Icon type="card" color={ iconColor } />
					<Icon type="cart" color={ iconColor } />
					<Icon type="cycling" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="code" color={ iconColor } />
					<Icon type="bell" color={ iconColor } />
					<Icon type="bellOutlined" color={ iconColor } />
					<Icon type="user" color={ iconColor } />
					<Icon type="settings" color={ iconColor } />
					<Icon type="refresh" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="wifi" color={ iconColor } />
					<Icon type="save" color={ iconColor } />
					<Icon type="sync" color={ iconColor } />
					<Icon type="globe" color={ iconColor } />
					<Icon type="stop" color={ iconColor } />
					<Icon type="search" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="delete" color={ iconColor } />
					<Icon type="home" color={ iconColor } />
					<Icon type="edit" color={ iconColor } />
					<Icon type="copy" color={ iconColor } />
					<Icon type="link" color={ iconColor } />
					<Icon type="clap" color={ iconColor } />
				</div>

				<div className="iconRow">
					<Icon type="hand" color={ iconColor } />
					<Icon type="thumbUp" color={ iconColor } />
					<Icon type="thumbDown" color={ iconColor } />
					<Icon type="rockOn" color={ iconColor } />
					<Icon type="heart" color={ iconColor } />
					<Icon type="heartOutlined" color={ iconColor } />
				</div>
			</div>
		</div>
	)
}

export default Icons;
