import React from 'react';
import styles from './Link.module.scss';
import classNames from 'classnames';

interface LinkProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  arialLabel?: string;
}

export const PlatformLink: React.FC<LinkProps> = ({
  text,
  onClick,
  disabled,
  arialLabel,
}) => {
  return (
    <a
      className={classNames(styles['root'], {
        [`${styles['disabled']}`]: disabled,
      })}
      aria-label={arialLabel}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
    >
      {text}
    </a>
  );
};
