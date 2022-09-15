import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './actions/index';
import { connect } from 'react-redux';
import Counter from './components/Counter';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
} 