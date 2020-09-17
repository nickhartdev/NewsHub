import React from 'react';
import Form from '../Form/Form';
import LanguageHeader from './LanguageHeader/LanguageHeader';

const LanguageSelect = ({ setLanguage }) => {
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
        functionality={ setLanguage }
      />
    </main>
  );
}

export default LanguageSelect;