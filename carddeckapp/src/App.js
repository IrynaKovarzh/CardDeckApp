import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';

import './css/App.css';

import NewDeck from './NewDeck';
import MyDecks from './MyDecks';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/my-decks" component={MyDecks} />
          <Route path="/new-deck" component={NewDeck} />
        </Switch>

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
