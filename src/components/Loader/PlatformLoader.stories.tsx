import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatformLoader } from './index';

storiesOf('Spinner', module).add('Spinner', () => {
  return <PlatformLoader />;
});
