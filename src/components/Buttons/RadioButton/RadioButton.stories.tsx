import { storiesOf } from '@storybook/react';
import { PlatformRadioButton } from './index';
import React, { useCallback, useState } from 'react';

storiesOf('Radio button', module)
  .add('default', () => {
    return <PlatformRadioButton />;
  })
  .add('checked', () => {
    return <PlatformRadioButton checked={true} />;
  })
  .add('Interactive', () => {
    const [checked, setChecked] = useState(false);
    const onClick = useCallback(() => {
      setChecked(!checked);
    }, [checked]);
    return <PlatformRadioButton checked={checked} onClick={onClick} />;
  });
