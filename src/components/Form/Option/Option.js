import React from 'react';
import { useTranslation } from 'react-i18next';

const Option = ({ optionToDisplay, functionToCall, options }) => {
  const { t, i18n } = useTranslation();

  const createKey = optionToDisplay => {
    if (options.includes('business') || options.includes('los negocios')) {
      return `interests.${optionToDisplay}`;
    } else {
      return optionToDisplay;
    }
  }

  return (
    <button type="button" onClick={functionToCall}>
      {t(createKey(optionToDisplay))}
    </button>
  )
}

export default Option;