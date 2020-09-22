import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../i18n';
import './SubmitButton.css';

const SubmitButton = ({ options }) => {
  const createRoute = () => {
    if (options.includes("English") || options.includes("Español")) {
      return "/interest-select";
    } else {
      return "/home";
    }
  };

  return (
    <Link to={createRoute()}>
      <button id="submit-button">➡</button>
    </Link>
  )
}

SubmitButton.propTypes = {
  options: PropTypes.array
}

export default SubmitButton;