import React from 'react';
import Form from '../Form/Form';
import LanguageHeader from './LanguageHeader/LanguageHeader';

const LanguageSelect = ({ changeLanguage }) => {
  const languages = [
    // "العربية",
    // "Deutsch",
    "English",
    "Español",
    // "Français",
    // "עברית",
    // "Italiano",
    // "Nederlands",
    // "Norsk",
    // "Português",
    // "русский",
    // "Davvisámegiella",
    // "中文"
  ];



  return (
    <main>
      <LanguageHeader />
      <Form 
        options={ languages }
        functionToCall={ changeLanguage }
      />
    </main>
  );
}

export default LanguageSelect;