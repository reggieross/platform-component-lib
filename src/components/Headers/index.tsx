import React from 'react';
import styles from './SectionTitle.module.scss';

//TODO update to be SEO and ADA compliment
export const PlatformHeader: React.FC = ({ children }) => (
  <div className={styles['section-title']}>{children}</div>
);
