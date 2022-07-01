import React from 'react';
import styles from './styles.module.scss';

export const Footer: React.FC = () => (
  <div className={styles.root}>
    <a href="mailto:stasishulvi@gmail.com">StasiShulvi@gmail.com</a>
    <a href="tel:+4915203558257">+49 152 0355-82-57</a>
    <a
      href='https://www.linkedin.com/in/anastasia-shulvinskaya/'
      target='_blank'
      rel='noreferrer noopener'
    >
      LinKedIn
    </a>
    <div>Berlin, Mitte</div>
  </div>
);
