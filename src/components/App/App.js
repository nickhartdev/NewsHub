import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Route path="/language-select">
        <LanguageSelect />
      </Route>
      <Route path="/interest-select">
        <InterestSelect />
      </Route>
    </div>
  );
}

export default App;
