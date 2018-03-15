import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import MyDecks from './MyDecks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CARD BOX</h1>
        </header>
        <MyDecks />
      </div>
    );
  }
}

export default App;
