import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Form from '../Form/Form';
import LanguageHeader from './LanguageHeader/LanguageHeader';

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
      <LanguageHeader />
      <Form options={ languages }/>
    </main>
  );
}

export default LanguageSelect;