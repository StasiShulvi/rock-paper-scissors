import React from 'react';
import styles from './styles.module.scss';

type Props = {
  onClick: () => void
};

export const ButtonRules: React.FC<Props> = ({ onClick }) => (
  <div className={styles.root}>
      <button className={styles.button} onClick={onClick} type="button">Rules</button>
  </div>
);
