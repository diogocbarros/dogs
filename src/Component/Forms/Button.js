import React from 'react';
import styles from './Button.module.css';
const Button = ({ desc }) => {
  return <button className={styles.button}>{desc}</button>;
};

export default Button;
