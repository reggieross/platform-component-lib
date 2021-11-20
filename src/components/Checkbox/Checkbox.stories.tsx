import { storiesOf } from '@storybook/react';
import { PlatformCheckbox } from './index';
import React, { useCallback, useState } from 'react';

storiesOf('Checkbox', module)
  .add('default', () => {
    return <PlatformCheckbox />;
  })
  .add('checked', () => {
    return <PlatformCheckbox checked={true} />;
  })
  .add('Interactive', () => {
    const [checked, setChecked] = useState(false);
    const onClick = useCallback(() => {
      setChecked(!checked);
    }, [checked]);
    return <PlatformCheckbox checked={checked} onClick={onClick} />;
  });
