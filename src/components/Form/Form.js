import React from 'react';
import Option from './Option/Option';
import SubmitButton from './SubmitButton/SubmitButton';
import './Form.css';

const Form = ({ options, functionToCall, selectedInterests, translateInterest }) => {
  const optionsToSelect = options.map(option => {
    return (
      <Option 
        options={ options }
        optionToDisplay={ option } 
        functionToCall={ functionToCall }
        selectedInterests={ selectedInterests }
        translateInterest={ translateInterest }
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