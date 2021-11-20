import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import styles from './PlatformLoader.module.scss';

export const PlatformLoader: React.FC = () => {
  return (
    <Box className={styles.root} position="relative" display="inline-flex">
      <CircularProgress
        className={styles.progress}
        style={{ height: '120px', width: '120px' }}
      />
    </Box>
  );
};
