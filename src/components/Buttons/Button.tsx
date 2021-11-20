import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import styles from './Button.module.scss';
import classNames from 'classnames';

export enum ButtonSize {
  XSMALL = 'XSMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  XXLARGE = 'XXLARGE',
}

export interface ButtonProps {
  text: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  onClick?: () => void;
  onKeyDown?: (event: any) => void;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  size?: ButtonSize;
}

export enum ButtonStyle {
  PRIMARY,
  SECONDARY,
}

export const PlatformButton: React.FC<ButtonProps> = ({
  text,
  startIcon,
  endIcon,
  onClick,
  onKeyDown,
  ariaLabel,
  buttonStyle = ButtonStyle.PRIMARY,
  disabled = false,
  loading = false,
  size = ButtonSize.LARGE,
}) => {
  return (
    <Button
      onKeyDown={onKeyDown}
      variant="outlined"
      disabled={disabled}
      onClick={disabled || loading ? undefined : onClick}
      className={classNames(styles['root'], {
        [`${styles['primary']}`]: buttonStyle === ButtonStyle.PRIMARY,
        [`${styles['secondary']}`]: buttonStyle === ButtonStyle.SECONDARY,
        [`${styles['xsmall']}`]: size === ButtonSize.XSMALL,
        [`${styles['small']}`]: size === ButtonSize.SMALL,
        [`${styles['medium']}`]: size === ButtonSize.MEDIUM,
        [`${styles['large']}`]: size === ButtonSize.LARGE,
        [`${styles['xlarge']}`]: size === ButtonSize.XLARGE,
        [`${styles['xxlarge']}`]: size === ButtonSize.XXLARGE,
      })}
      aria-label={ariaLabel}
    >
      {loading && (
        <CircularProgress
          className={styles['progress']}
          style={{ height: '20px', width: '20px' }}
        />
      )}
      {startIcon}
      <span>{text}</span>
      {endIcon}
    </Button>
  );
};
