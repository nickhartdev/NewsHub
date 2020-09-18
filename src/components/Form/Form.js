import React from 'react';
import Option from './Option/Option';

const Form = ({ options, functionToCall }) => {
  const optionsToSelect = options.map(option => {
    return (
      <Option 
        options = { options }
        optionToDisplay={ option } 
        functionToCall={ functionToCall }
        key={ options.indexOf(option) }
      />
    )
  })

  return (
    <section className="form">
      { optionsToSelect }
    </section>
  );
}

export default Form;