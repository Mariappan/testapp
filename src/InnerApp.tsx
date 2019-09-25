import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { RoughText } from './components/RoughText/RoughText';
import { Clock } from './components/Clock';

class InnerApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-main">
          <Clock />
          <RoughText />
        </div>
      </div>
    );
  }
}

export default InnerApp;
