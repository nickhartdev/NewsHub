import React from "react";
import Form from "../Form/Form";

const InterestSelect = ({ modifyInterests }) => {
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
        functionToCall={ modifyInterests }
      />
    </main>
  );
};

export default InterestSelect;
