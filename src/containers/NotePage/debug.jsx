import React from 'react';
import styles from './style.scss';

export default ({ show, children }) =>
  show && <div className={styles.debug}>{children}</div>;
