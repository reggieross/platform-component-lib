import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { PlatformSimpleSelect, Option } from './index';
import { PlatformPrimaryButton } from '../Buttons/PrimaryButton';

const states = [
  { id: 'AL', name: 'Alabama' },
  { id: 'AK', name: 'Alaska' },
  { id: 'AZ', name: 'Arizona' },
  { id: 'CO', name: 'Colorado' },
  { id: 'IL', name: 'Illinois' },
];

storiesOf('SimpleSelect', module)
  .add('Default', () => {
    return <PlatformSimpleSelect options={states} />;
  })
  .add('With placeholder', () => {
    return <PlatformSimpleSelect label={'Select state'} options={states} />;
  })
  .add('State managed outside the component w/ Reset Icon', () => {
    const [selected, setSelected] = useState<string | Option>('');

    const handleSelected = (val: Option) => {
      setSelected(val);
    };

    return (
      <div>
        <PlatformSimpleSelect
          selectedOption={selected}
          options={states}
          label={'State'}
          onChange={handleSelected}
          clearIcon={() => {
            setSelected('');
          }}
        />
      </div>
    );
  })
  .add('State managed outside the component w/ Reset Button', () => {
    const [selected, setSelected] = useState<string | Option>('');

    const handleSelected = (val: Option) => {
      setSelected(val);
    };

    return (
      <div>
        <PlatformSimpleSelect
          selectedOption={selected}
          options={states}
          label={'State'}
          onChange={handleSelected}
        />
        <PlatformPrimaryButton text={'Reset'} onClick={() => setSelected('')} />
      </div>
    );
  })
  .add('loading state', () => {
    const [selected, setSelected] = useState<string | Option>('');

    const handleSelected = (val: Option) => {
      setSelected(val);
    };

    return (
      <div>
        <PlatformSimpleSelect
          selectedOption={selected}
          options={[]}
          label={'State'}
          onChange={handleSelected}
          loading={true}
        />
      </div>
    );
  });
