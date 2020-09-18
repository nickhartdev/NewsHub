import React from 'react';
import Option from './Option/Option';
import SubmitButton from './SubmitButton/SubmitButton';

const Form = ({ options, functionToCall }) => {
  const optionsToSelect = options.map(option => {
    return (
      <Option 
        options={ options }
        optionToDisplay={ option } 
        functionToCall={ functionToCall }
        key={ options.indexOf(option) }
      />
    )
  })

  return (
    <section className="form">
      { optionsToSelect }
      <SubmitButton options={ options }/>
    </section>
  );
}

export default Form;