import React from 'react';
import Cipher from './cipher';
import styles from './style.scss';

const GameCode = () => (
  <div className={styles.wrapper}>
    <Cipher
      message={[
        'Well color me impressed, as I expectated, none of you should still be breathing by now.',
        'But you are of good entertainment indeed, I’ll give you this. ',
        'But hey, don’t hold your grudge against me. I’m nothing, I’m nobody.',
        'They, already have their marks on you.',
        'Before  farewell, deeply from my heart, I congratulate you for escaping your doomed fate!',
        '',
        'Or did you……',
      ]}
    />
  </div>
);
export default GameCode;
