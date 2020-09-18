import React from "react";
import { Trans } from "react-i18next";
import Form from "../Form/Form";

const InterestSelect = ({ toggleInterest }) => {
  const interests = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  return (
    <main>
      <Trans i18nKey="interestHeader" />
      <Form 
        options={ interests } 
        functionToCall={ toggleInterest }
      />
    </main>
  );
};

export default InterestSelect;
