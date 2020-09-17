import React from 'react';
import Option from './Option/Option';

const Form = ({ options }) => {
  const optionsToSelect = options.map(option => {
    return <Option optionToDisplay={ option } />
  })

  return (
    <section className="form">
      { optionsToSelect }
    </section>
  );
}

export default Form;