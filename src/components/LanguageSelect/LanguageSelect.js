import React from 'react';
import Form from '../Form/Form';

const LanguageSelect = () => {
  const languages = [
    "العربية",
    "Deutsch",
    "English",
    "Español",
    "Français",
    "עברית",
    "Italiano",
    "Nederlands",
    "Norsk",
    "Português",
    "русский",
    "Davvisámegiella",
    "中文"
  ];

  return (
    <main>
      <h1>Choose a language</h1>
      <Form options={ languages }/>
    </main>
  );
}

export default LanguageSelect;