import React from 'react';
import { Footer } from '../Footer';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode
};
export const Layout: React.FC<Props> = ({children}: Props) => {
  if (!children) return null;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
