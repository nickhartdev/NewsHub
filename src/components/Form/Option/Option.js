import React from 'react';

const Option = ({ optionToDisplay, functionality }) => {
  return (
    <button type="button" onClick={functionality}>
      {optionToDisplay}
    </button>
  )
}

export default Option;