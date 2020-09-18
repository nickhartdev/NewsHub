import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import './App.css';
import { useTranslation } from 'react-i18next';
require('dotenv').config();

const App = () => {
  const [interests, modifyInterests] = useState([]);
  const [t, i18n] = useTranslation();

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.innerText.slice(0, 2).toLowerCase());
  }

  const toggleInterest = e => {
    const interest = e.target.innerText.toLowerCase();
    
    if (interests.includes(interest)) {
      const newInterests = interests.filter(interestToCheck => {
        return interestToCheck !== interest
      })
      
      modifyInterests(newInterests);
    } else if (!interests.includes(interest)) {
      modifyInterests(interests.concat(interest));
    }
  }

  return (
    <div className="App">
      <Route path="/language-select">
        <LanguageSelect changeLanguage={ changeLanguage } />
      </Route>
      <Route path="/interest-select">
        <InterestSelect toggleInterest={ toggleInterest }/>
      </Route>
    </div>
  )
}

export default App;
