import React from 'react';
import Form from '../Form/Form';
import LanguageHeader from './LanguageHeader/LanguageHeader';

const LanguageSelect = ({ changeLanguage }) => {
  const languages = [
    "English",
    "Español"
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