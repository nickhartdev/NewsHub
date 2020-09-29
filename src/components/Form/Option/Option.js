import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './Option.css';

const Option = ({ optionToDisplay, functionToCall, options }) => {
  const { t } = useTranslation();

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

Option.propTypes = {
  optionToDisplay: PropTypes.string,
  functionToCall: PropTypes.func,
  options: PropTypes.array
}

export default Option;