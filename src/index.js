import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Menu from "./components/Menu";
import Icon from "./components/Icon";
import message from "./components/Message";


import './styles.scss'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props;

    return (
			<div className={ styles.test }>
        Example Component: { text }
      </div>
    )
  }
}

export { Button, Card, Navbar, Modal, Menu, Icon, message };
