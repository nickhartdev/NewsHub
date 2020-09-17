import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const LanguageHeader = () => {
  const [t, i18n] = useTranslation();
  const languages = ['en', 'es'];

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      i18n.changeLanguage(languages[counter]);

      counter++;

      if (counter > languages.length - 1) {
        counter = 0;
      }
    }, 10000);
  }, [])

  return (
    <Trans i18nKey="title" />
  )
}

export default LanguageHeader;