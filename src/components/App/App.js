import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import './App.css';
require('dotenv').config();

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Route path="/language-select">
          <LanguageSelect />
        </Route>
        <Route path="/interest-select">
          <InterestSelect />
        </Route>
      </div>
    )
  };
}

export default App;
