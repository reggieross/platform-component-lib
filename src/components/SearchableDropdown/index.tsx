import React, { useState } from 'react';
import styles from './SearchableDropdown.module.scss';
import classNames from 'classnames';
import { ClickAwayListener, LinearProgress } from '@material-ui/core';
export interface MenuItemData {
  id: string;
  display: string;
  extraInfo?: Record<string, any>;
}

const MenuItem: React.FC<{
  option: MenuItemData;
  onItemClick: (menuItemData: MenuItemData) => void;
}> = ({ option, onItemClick }) => {
  const handleKeyDown = (e): void => {
    if (e.key === 'Enter') {
      onItemClick(option);
    }
  };

  return (
    <div
      className={styles['menu-item']}
      tabIndex={0}
      onClick={() => onItemClick(option)}
      onKeyDown={handleKeyDown}
    >
      {option.display}
    </div>
  );
};

const DownMenu: React.FC<{
  open: boolean;
  options: MenuItemData[];
  onItemClick: (menuItem: MenuItemData) => void;
}> = ({ options, onItemClick, open }) => {
  return (
    <div
      tabIndex={0}
      className={classNames(styles['menu'], {
        [`${styles['close']}`]: open,
      })}
    >
      {options.map((option) => (
        <MenuItem key={option.id} option={option} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export const PlatformSearchableDropdown: React.FC<{
  placeHolder?: string;
  title?: string;
  frontIcon?: React.ReactElement;
  disabled?: boolean;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  options: MenuItemData[];
  onMenuItemClick: (value: MenuItemData) => void;
  loading?: boolean;
  onEnter?: () => void;
}> = ({
  title,
  options,
  onMenuItemClick,
  disabled,
  onInputChange,
  inputValue,
  frontIcon,
  placeHolder,
  loading,
  onEnter,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onClick = (value: MenuItemData) => {
    setOpen(false);
    onMenuItemClick(value);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={styles['loading-container']}>
        <div
          className={classNames(styles['root'], {
            [`${styles['front-icon']}`]: !!frontIcon,
          })}
        >
          {frontIcon}
          <input
            title={title}
            placeholder={placeHolder}
            tabIndex={0}
            onFocus={() => inputValue.length > 0 && setOpen(true)}
            value={inputValue}
            disabled={disabled}
            onChange={(input: { target: { value: string } }) => {
              const { value } = input.target;
              if (value === '') {
                setOpen(false);
              }
              onInputChange && onInputChange(value);
            }}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                setOpen(true);
                onEnter && onEnter();
              }
            }}
          />
          {open && (
            <DownMenu open={open} options={options} onItemClick={onClick} />
          )}
        </div>
        {open && loading && (
          <LinearProgress className={styles['loading-indicator']} />
        )}
      </div>
    </ClickAwayListener>
  );
};
