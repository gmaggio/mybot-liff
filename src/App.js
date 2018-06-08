import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const liff = window.liff;  

class App extends Component {

  componentDidMount() {
    window.addEventListener('load', this.initialize);
  }

  initialize() {
    liff.init((data) => {});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
