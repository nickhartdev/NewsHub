import React, { useState, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import './App.css';
import { useTranslation } from 'react-i18next';
require('dotenv').config();

const App = () => {
  const [interests, modifyInterests] = useState([]);
  const [t, i18n] = useTranslation();
  const englishCategories = [
    'Business',
    'Entertainment',
    'Health',
    'Science',
    'Sports',
    'Technology'
  ]

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.innerText.slice(0, 2).toLowerCase());
  }

  const toggleInterest = e => {
    const interest = translateInterest(e.target.innerText);
    
    if (interests.includes(interest)) {
      modifyInterests(interests.filter(interestToKeep => {
        return interestToKeep !== interest;
      }))
    } else if (!interests.includes(interest)) {
      modifyInterests([...interests, interest]);
    }
  }

  const translateInterest = interest => {
    if (englishCategories.includes(interest)) {
      return interest;
    } else {
      switch (interest) {
        case 'Los negocios':
          return 'business';
          break;
        case 'La Entretenimiento':
          return 'entertainment';
          break;
        case 'La Salud':
          return 'health';
          break;
        case 'La Ciencia':
          return 'science';
          break;
        case 'Los Deportes':
          return 'sports';
          break;
        case 'La Tecnologia':
          return 'technology';
          break;
      }
    }
  }

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/language-select">
          <LanguageSelect changeLanguage={changeLanguage} />
        </Route>
        <Route path="/interest-select">
          <InterestSelect toggleInterest={toggleInterest} />
        </Route>
      </Suspense>
    </div>
  );
}

export default App;
