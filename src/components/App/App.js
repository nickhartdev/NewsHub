import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import './App.css';
import '../../i18n';
require('dotenv').config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
      interests: []
    }
  }

  setLanguage = e => {
    this.setState({ language: e.target.innerText })
  }

  render() {
    return (
      <div className="App">
        <Route path="/language-select">
          <LanguageSelect 
            setLanguage={ this.setLanguage }
          />
        </Route>
        <Route path="/interest-select">
          <InterestSelect />
        </Route>
      </div>
    )
  };
}

export default App;
