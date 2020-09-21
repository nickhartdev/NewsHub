import React from 'react';
import { useTranslation } from 'react-i18next';
import './Option.css';

const Option = ({ optionToDisplay, functionToCall, options, selectedInterests, translateInterest }) => {
  const { t, i18n } = useTranslation();

  const createKey = optionToDisplay => {
    if (options.includes('business') || options.includes('los negocios')) {
      return `interests.${optionToDisplay}`;
    } else {
      return optionToDisplay;
    }
  }

  return (
    <button onClick={functionToCall} className="option">
      {t(createKey(optionToDisplay))}
    </button>
  )
}

export default Option;