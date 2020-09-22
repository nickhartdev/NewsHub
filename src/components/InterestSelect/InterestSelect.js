import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import Form from "../Form/Form";
import '../../i18n';

const InterestSelect = ({ toggleInterest, interests }) => {
  const { t } = useTranslation();

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

InterestSelect.propTypes = {
  toggleInterest: PropTypes.func,
  interests: PropTypes.array
}

export default InterestSelect;
