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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CARD BOX</h1>
        </header>

        <Switch>
          <Route exact path="/" component={MyDecks} />

          <Route exact path="/mydecks" component={MyDecks} />
          <Route exact path="/mydecks/new" component={NewDeck} />
        </Switch>


      </div>
    );
  }
}

export default App;
