import React from 'react';

const Option = ({ optionToDisplay, functionToCall }) => {
  return (
    <button type="button" onClick={functionToCall}>
      {optionToDisplay}
    </button>
  )
}

export default Option;