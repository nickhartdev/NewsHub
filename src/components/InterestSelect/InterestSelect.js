import React from "react";
import Form from "../Form/Form";
import { useTranslation } from 'react-i18next';

const InterestSelect = ({ toggleInterest }) => {
  const interests = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology"
  ];

  return (
    <main>
      <h1>Choose your interests</h1>
      <Form 
        options={ interests } 
        functionToCall={ toggleInterest }
      />
    </main>
  );
};

export default InterestSelect;
