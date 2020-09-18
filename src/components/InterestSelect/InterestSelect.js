import React from "react";
import { useTranslation } from "react-i18next";
import Form from "../Form/Form";
import '../../i18n';

const InterestSelect = ({ toggleInterest }) => {
  const { t } = useTranslation();
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
      <h1>{t('interestHeader')}</h1>
      <Form 
        options={ interests } 
        functionToCall={ toggleInterest }
      />
    </main>
  );
};

export default InterestSelect;
