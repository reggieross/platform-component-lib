import React from 'react';
import styles from './ColumnExample.module.scss';

export const ColumnExample: React.FC = ({ children }) => (
  <div className={styles['root']}>
    <div className={styles['oneCol']}>{children}</div>
    <div className={styles['twoCol']}>{children}</div>
    <div className={styles['threeCol']}>{children}</div>
    <div className={styles['fourCol']}>{children}</div>
    <div className={styles['fiveCol']}>{children}</div>
    <div className={styles['sixCol']}>{children}</div>
    <div className={styles['sevenCol']}>{children}</div>
    <div className={styles['eightCol']}>{children}</div>
    <div className={styles['nineCol']}>{children}</div>
    <div className={styles['tenCol']}>{children}</div>
    <div className={styles['elevenCol']}>{children}</div>
    <div className={styles['twelveCol']}>{children}</div>
  </div>
);
