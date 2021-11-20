import React from 'react';
import styles from './HalfPageLayout.module.scss';

export const PlatformHalfPageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles['root']}>
        <div className={styles['colored-side']} />
        <div className={styles['main-content']}>{children}</div>
      </div>
    </div>
  );
};
