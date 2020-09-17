import React from 'react';
import { useTranslation } from 'react-i18next';

const Option = ({ optionToDisplay, functionToCall }) => {
  return (
    <button type="button" onClick={functionToCall}>
      {optionToDisplay}
    </button>
  )
}

export default Option;