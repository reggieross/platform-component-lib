import React from 'react';
import { InputBase } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import styles from './SearchInput.module.scss';
import InputAdornment from '@material-ui/core/InputAdornment';
import { debounce } from 'lodash';

interface SearchInputProps {
  onChange?: (val: string) => void;
  id?: string;
  placeHolder?: string;
  value?: string;
  inputRef?: (val: string) => void;
}

export const PlatformSearchInput: React.FC<SearchInputProps> = ({
  onChange,
  id,
  placeHolder,
  value,
  inputRef,
}) => {
  const debouncedChangeHandler = debounce((value: string) => {
    if (onChange) {
      onChange(value);
    }
  }, 300);

  const frontInputIcon = (
    <InputAdornment className={styles['search-icon']} position="start">
      <Search />
    </InputAdornment>
  );

  const onChangeHandler = (e: any) => {
    e.persist();
    const { value } = e.target;
    debouncedChangeHandler(value);
  };

  return (
    <div className={styles['root']} >
      <InputBase
        inputRef={inputRef}
        value={value}
        id={id}
        fullWidth={true}
        onChange={onChangeHandler}
        type={'text'}
        placeholder={placeHolder ?? ''}
        startAdornment={frontInputIcon}
        inputProps={{ 'aria-label': 'naked' }}
      />
    </div>
  );
};
