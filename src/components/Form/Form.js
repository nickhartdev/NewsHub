import React from 'react';
import Option from './Option/Option';
import SubmitButton from './SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
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

Form.propTypes = {
  options: PropTypes.array,
  functionToCall: PropTypes.func,
  selectedInterests: PropTypes.array,
  translateInterest: PropTypes.func
}

export default Form;