import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Menu from "./components/Menu";
import Icon from "./components/FlwwwIcon";
import message from "./components/Message";
import Input from "./components/Input";
import TextArea from "./components/Input/TextArea";
import Table from "./components/Table";
import Drawer from "./components/Drawer";
import ThemeProvider from "./components/ThemeProvider";
import { Row, Container, Col } from "./components/Layout";
// V2 Components
import { RadialProgress, DefaultProgress } from "./components/Progress";
import Checkbox from "./components/Checkbox";
import Tooltip from "./components/Tooltip";
import ArticleCard from "./components/ArticleCard";
import Rating from "./components/Rating";
import Dropdown from "./components/Dropdown";
import TopLoader from "./components/TopLoader";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Statistic from "./components/Statistic";
import Tag from "./components/Tag";

import NewIcon from "./components/NewIcon";

import styles from "./styles.scss";


export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props;

    return (
			<div>
        Hello World!
      </div>
    )
  }
}

export {
	Button,
	Card,
	Navbar,
	Modal,
	Menu,
	Icon,
	message,
	Input,
	TextArea,
	Table,
	Drawer,
	ThemeProvider,
	Container,
	Row,
	Col,
	RadialProgress,
	DefaultProgress,
	Checkbox,
	Tooltip,
	ArticleCard,
	Rating,
	Dropdown,
	TopLoader,
	Avatar,
	Badge,
	Statistic,
	Tag,
	NewIcon,
};
