import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { PlatformSearchableDropdown } from './index';

const option = [
  { id: 'AL', display: 'Alabama' },
  { id: 'AK', display: 'Alaska' },
  { id: 'AZ', display: 'Arizona' },
  { id: 'CO', display: 'Colorado' },
  { id: 'IL', display: 'Illinois' },
];

storiesOf('Searchable Dropdown', module)
  .add('Default', () => {
    const [value, setInputValue] = useState<string>('');
    const filteredItems = option.filter((option) =>
      value.length > 0 ? option.display.includes(value) : true
    );
    return (
      <PlatformSearchableDropdown
        inputValue={value}
        options={filteredItems}
        onInputChange={setInputValue}
        onMenuItemClick={() => {
          return;
        }}
      />
    );
  })
  .add('With Icon', () => {
    const [value, setInputValue] = useState<string>('');
    const filteredItems = option.filter((option) =>
      value.length > 0
        ? option.display.toLowerCase().includes(value.toLowerCase())
        : true
    );
    return (
      <PlatformSearchableDropdown
        inputValue={value}
        frontIcon={<SearchIcon />}
        options={filteredItems}
        onInputChange={setInputValue}
        onMenuItemClick={() => {
          return;
        }}
      />
    );
  })
  .add('With placeholder', () => {
    const [value, setInputValue] = useState<string>('');
    const filteredItems = option.filter((option) =>
      value.length > 0 ? option.display.includes(value) : true
    );
    return (
      <PlatformSearchableDropdown
        inputValue={value}
        placeHolder={'Select state'}
        frontIcon={<SearchIcon />}
        options={filteredItems}
        onInputChange={setInputValue}
        onMenuItemClick={() => {
          return;
        }}
      />
    );
  })
  .add('Loading', () => {
    const [value, setInputValue] = useState<string>('');
    return (
      <PlatformSearchableDropdown
        inputValue={value}
        placeHolder={'Select state'}
        frontIcon={<SearchIcon />}
        options={[]}
        onInputChange={setInputValue}
        onMenuItemClick={() => {
          return;
        }}
        loading={true}
      />
    );
  });
