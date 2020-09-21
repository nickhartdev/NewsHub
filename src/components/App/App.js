import React, { useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import InterestSelect from '../InterestSelect/InterestSelect';
import ReadingList from '../ReadingList/ReadingList';
import Home from '../Home/Home';
import './App.css';

const App = () => {
  const [interests, modifyInterests] = useState([]);
  const [t, i18n] = useTranslation();
  const englishCategories = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.innerText.slice(0, 2).toLowerCase());
  }

  const toggleInterest = e => {
    const interest = translateInterest(e.target.innerText.toLowerCase());
    
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
        case 'los negocios':
          return 'business';
        case 'la entretenimiento':
          return 'entertainment';
        case 'la salud':
          return 'health';
        case 'la ciencia':
          return 'science';
        case 'los deportes':
          return 'sports';
        case 'la tecnología':
          return 'technology';
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
          <InterestSelect 
            toggleInterest={toggleInterest} 
            interests={ englishCategories }
          />
        </Route>
        <Route path="/home">
          <Home interests={ interests } />
        </Route>
        <Route path="/reading-list">
          <ReadingList />
        </Route>
      </Suspense>
    </div>
  );
}

export default App;
