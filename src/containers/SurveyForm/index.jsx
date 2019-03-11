import React from 'react';

import FormBase from '../../components/FormBase';

import config from './config';
import cb from './function';
import styles from './style.scss';

const SurveyForm = ({ history }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Agent Identification</h2>
      <FormBase config={config} callback={cb(history)} />
    </div>
  );
};

export default SurveyForm;
