import React from 'react';
import { Layout } from 'components/Layout';
import styles from './styles.module.scss';

export const NotFoundPage: React.FC = () => (
  <Layout>
    <div className={styles.notFoundPage}>404</div>
  </Layout>
);
