import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Clock } from './components/Clock';

class InnerApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>C L O C K</h1>
        </header>

        <div className="App-main">
          <Clock />
        </div>
      </div>
    );
  }
}

export default InnerApp;
