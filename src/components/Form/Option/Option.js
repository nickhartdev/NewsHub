import React from 'react';
import { Trans } from 'react-i18next';
import '../../../i18n'

const Option = ({ optionToDisplay, functionToCall }) => {
  return (
    <button type="button" onClick={functionToCall}>
      <Trans i18nKey={`interests.${optionToDisplay}`} />
    </button>
  )
}

export default Option;