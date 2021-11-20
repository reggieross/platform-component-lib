import React, { useState } from 'react';
import styles from './SimpleSelect.module.scss';
import classNames from 'classnames';
import { ClickAwayListener, LinearProgress } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';
export interface Option {
  id: string;
  name: string;
  extraInfo?: Record<string, any>;
}

export const MenuItem: React.FC<{
  option: Option;
  onItemClick: (menuItemData: Option) => void;
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
      {option.name}
    </div>
  );
};

export const Menu: React.FC<{
  open: boolean;
  options: Option[];
  onItemClick: (menuItem: Option) => void;
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

const optionTypeGuard = (option: string | Option): option is Option => {
  return (option as Option)?.name !== undefined;
};

export enum SimpleSelectType {
  MAINTAIN_VALUE = 'maintainValue',
}

export const PlatformSimpleSelect: React.FC<{
  label?: string;
  title?: string;
  disabled?: boolean;
  options: Option[];
  type?: SimpleSelectType;
  selectedOption?: Option | string;
  onChange?: (value: Option) => void;
  loading?: boolean;
  clearIcon?: () => void;
}> = ({
  title,
  options,
  onChange,
  disabled,
  label,
  type,
  selectedOption,
  loading,
  clearIcon,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [maintainedValue, setMaintainedValue] = useState<Option | string>(
    selectedOption || ''
  );

  React.useEffect(() => {
    setMaintainedValue(selectedOption);
  }, [selectedOption]);

  const onClick = (value: Option) => {
    setOpen(false);
    onChange && onChange(value);
    setMaintainedValue(value);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={styles['loading-container']}>
        <div className={classNames(styles['root'], styles['end-icon'])}>
          <input
            title={title}
            placeholder={label}
            tabIndex={0}
            onFocus={() => setOpen(true)}
            disabled={disabled}
            value={
              type === SimpleSelectType.MAINTAIN_VALUE
                ? optionTypeGuard(maintainedValue)
                  ? maintainedValue?.name
                  : maintainedValue
                : optionTypeGuard(maintainedValue)
                ? maintainedValue?.name
                : ''
            }
            readOnly={true}
          />
          <div className={styles['icon']}>
            {maintainedValue && clearIcon && (
              <div style={{ cursor: 'pointer' }}>
                <ClearIcon onClick={clearIcon} />{' '}
              </div>
            )}
            {(!maintainedValue || !clearIcon) && <ArrowDropDownIcon />}
          </div>
          {open && <Menu open={open} options={options} onItemClick={onClick} />}
        </div>
        {open && loading && (
          <LinearProgress className={styles['loading-indicator']} />
        )}
      </div>
    </ClickAwayListener>
  );
};
