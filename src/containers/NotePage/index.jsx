import React from 'react';
import Cipher from './cipher';
import styles from './style.scss';

const GameCode = () => (
  <div className={styles.wrapper}>
    <Cipher
      message="
    import React from 'react';

    import FormBase from '../../components/FormBase';
    
    import config from './config';
    import cb from './function';
    import './style.css';
    
    const SurveyForm = ({ history }) => {
      return (
        <div className='wrapper'>
          <h2>Would you like to join us!!!</h2>
          <FormBase config={config} callback={cb(history)} />
        </div>
      );
    };
    
    export default SurveyForm;
    "
    />
  </div>
);
export default GameCode;
