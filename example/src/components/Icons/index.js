import React from 'react';
import { Icon } from 'flawwwless-library'


const Icons = props => {
	return (
		<div className="container">
			<h1 style={{ margin: "4rem 0", color: "red" }}>
				<Icon type="star" />
				Hello World
				<Icon type="time" />
				<Icon type="user" />
				<Icon type="hand" />
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
					<Icon type="arrowBack" color="#0888ff" />
					<Icon type="arrowTop" color="#0888ff" />
					<Icon type="arrowForward" color="#0888ff" />
					<Icon type="arrowDown" color="#0888ff" />
					<Icon type="close" color="#0888ff" />
					<Icon type="menu" color="#0888ff" />
				</div>

				<div className="iconRow">
				  <Icon type="star" color="#0888ff" />
					<Icon type="starOutlined" color="#0888ff" />
					<Icon type="starHalf" color="#0888ff" />
					<Icon type="checkmark" color="#0888ff" />
					<Icon type="chart" color="#0888ff" />
				  <Icon type="chat" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="lock" color="#0888ff" />
					<Icon type="unlock" color="#0888ff" />
					<Icon type="cloudUpload" color="#0888ff" />
					<Icon type="cloudDownload" color="#0888ff" />
					<Icon type="cloudOutlined" color="#0888ff" />
					<Icon type="cloud" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="bookmark" color="#0888ff" />
					<Icon type="bookmarkOutlined" color="#0888ff" />
				  <Icon type="coffee" color="#0888ff" />
					<Icon type="time" color="#0888ff" />
					<Icon type="flash" color="#0888ff" />
					<Icon type="loader" color="#0888ff" />
				</div>

				<div className="iconRow">
				  <Icon type="plus" color="#0888ff" />
					<Icon type="minus" color="#0888ff" />
					<Icon type="cash" color="#0888ff" />
					<Icon type="card" color="#0888ff" />
					<Icon type="cart" color="#0888ff" />
					<Icon type="cycling" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="code" color="#0888ff" />
					<Icon type="bell" color="#0888ff" />
					<Icon type="bellOutlined" color="#0888ff" />
					<Icon type="user" color="#0888ff" />
					<Icon type="settings" color="#0888ff" />
					<Icon type="refresh" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="wifi" color="#0888ff" />
					<Icon type="save" color="#0888ff" />
					<Icon type="sync" color="#0888ff" />
					<Icon type="globe" color="#0888ff" />
					<Icon type="stop" color="#0888ff" />
					<Icon type="search" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="delete" color="#0888ff" />
					<Icon type="home" color="#0888ff" />
					<Icon type="edit" color="#0888ff" />
					<Icon type="copy" color="#0888ff" />
					<Icon type="link" color="#0888ff" />
					<Icon type="clap" color="#0888ff" />
				</div>

				<div className="iconRow">
					<Icon type="hand" color="#0888ff" />
					<Icon type="thumbUp" color="#0888ff" />
					<Icon type="thumbDown" color="#0888ff" />
					<Icon type="rockOn" color="#0888ff" />
					<Icon type="heart" color="#ff4444" />
					<Icon type="heartOutlined" color="#0888ff" />
				</div>
			</div>
		</div>
	)
}

export default Icons;
