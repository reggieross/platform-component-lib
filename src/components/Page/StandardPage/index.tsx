import React from 'react';
import styles from './StandardPage.module.scss';

export const PlatformStandardPage: React.FC = ({ children }) => (
  <div>
    <div className={styles['root']}>{children}</div>
  </div>
);
