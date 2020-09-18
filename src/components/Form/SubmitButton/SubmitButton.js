import React from 'react';
import { Link } from 'react-router-dom';
import '../../../i18n';

const SubmitButton = ({ options }) => {
  const createRoute = () => {
    console.log(options)
    if (options.includes("English") || options.includes("Español")) {
      return "/interest-select";
    } else {
      return "/home";
    }
  };

  return (
    <Link to={createRoute()}>
      <button>➡</button>
    </Link>
  )
}

export default SubmitButton;