import React from 'react';
import Option from './Option/Option';

const Form = ({ options }) => {
  const optionsToSelect = options.map(option => {
    return <Option optionToDisplay={ option } />
  })

  return (
    <section className="form">
      <h2>Form</h2>
      { optionsToSelect }
    </section>
  );
}

export default Form;