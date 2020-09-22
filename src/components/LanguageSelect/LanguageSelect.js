import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import LanguageHeader from './LanguageHeader/LanguageHeader';

const LanguageSelect = ({ changeLanguage, selectedInterests, translateInterest }) => {
  const languages = [
    "English",
    "Español"
  ];

  return (
    <main>
      <LanguageHeader />
      <Form 
        options={ languages }
        selectedInterests={ selectedInterests }
        translateInterest={ translateInterest }
        functionToCall={ changeLanguage }
      />
    </main>
  );
}

LanguageSelect.propTypes = {
  changeLanguage: PropTypes.func,
  selectedInterests: PropTypes.array,
  translateInterest: PropTypes.func
}

export default LanguageSelect;