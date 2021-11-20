import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import styles from './RadioButton.module.scss';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledRadio = withStyles({
  root: {
    '&$checked': {
      color: '#005f86',
    },
  },
  checked: {},
})(Radio);

export const PlatformRadioButton: React.FC<{
  onClick?: () => void;
  onChange?: (event: any) => void;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  ariaLabel?: string;
}> = ({ onClick, onChange, checked, value, disabled, ariaLabel }) => {
  return (
    <span className={styles['root']}>
      <FormControlLabel
        disabled={disabled}
        aria-label={ariaLabel}
        key={value}
        className={styles['radio']}
        value={value}
        onClick={onClick}
        onChange={onChange}
        control={
          <StyledRadio
            className={classNames(styles['radio'], {
              [`${styles['active']}`]: checked,
            })}
            disableRipple={true}
            checked={checked}
          />
        }
        aria-disabled={disabled}
        label={value}
      />
    </span>
  );
};
