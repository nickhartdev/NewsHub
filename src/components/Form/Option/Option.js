import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Option = ({ optionToDisplay, functionToCall, options }) => {
  const { t, i18n } = useTranslation();

  const createKey = optionToDisplay => {
    if (options.includes('business') || options.includes('los negocios')) {
      return `interests.${optionToDisplay}`;
    } else {
      return optionToDisplay;
    }
  }

  const createRoute = () => {
    if (options.includes('English') || options.includes('Español')) {
      return '/interest-select'
    } else {
      return '/home'
    }
  }

  return (
    <Link to={createRoute()}>
      <button type="button" onClick={functionToCall}>
        {t(createKey(optionToDisplay))}
      </button>
    </Link>
  )
}

export default Option;