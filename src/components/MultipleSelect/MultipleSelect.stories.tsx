import { storiesOf } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { PlatformMultipleSelect } from './index';

storiesOf('Multipleselect', module).add('Multipleselect', () => {
  const checkedNameState = {
    AL: false,
    AK: false,
    AZ: false,
    CO: false,
    IL: false,
  };

  const [state, setState] = useState(checkedNameState);

  const handleChange = useCallback(
    (value: string) => {
      const currentValue = state[value];
      setState({ ...state, [value]: !currentValue });
    },
    [state]
  );

  const states = [
    { id: 'AL', name: 'Alabama', checked: state['AL'], onChange: handleChange },
    { id: 'AK', name: 'Alaska', checked: state['AK'], onChange: handleChange },
    { id: 'AZ', name: 'Arizona', checked: state['AZ'], onChange: handleChange },
    {
      id: 'CO',
      name: 'Colorado',
      checked: state['CO'],
      onChange: handleChange,
    },
    {
      id: 'IL',
      name: 'Illinois',
      checked: state['IL'],
      onChange: handleChange,
    },
  ];

  const selectedOption = Object.entries(state).reduce<string[]>(
    (acc, [key, val]) => {
      if (val) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  return (
    <PlatformMultipleSelect
      selectedOption={selectedOption}
      options={states}
      label="Select a value"
    />
  );
});
