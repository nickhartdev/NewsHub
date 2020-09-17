import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import './App.css';
import { useTranslation } from 'react-i18next';
require('dotenv').config();

const App = () => {
  const [interests, modifyInterests] = useState();
  const [t, i18n] = useTranslation();

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.innerText.slice(0, 2).toLowerCase());
  }

  return (
    <div className="App">
      <Route path="/language-select">
        <LanguageSelect changeLanguage={ changeLanguage } />
      </Route>
      <Route path="/interest-select">
        <InterestSelect />
      </Route>
    </div>
  )
}

export default App;
