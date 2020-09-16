import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LanguageSelect from './LanguageSelect/LanguageSelect;'
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Route 
        path="/language-select" 
        component={<LanguageSelect />}
      />
    </div>
  );
}

export default App;
