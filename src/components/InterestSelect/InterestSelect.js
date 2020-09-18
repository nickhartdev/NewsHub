import React from "react";
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
      <h1>Choose your interests</h1>
      <Form 
        options={ interests } 
        functionToCall={ toggleInterest }
      />
    </main>
  );
};

export default InterestSelect;
