import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatformSearchInput } from './index';

storiesOf('Search Input/Primary', module).add('Default', () => {
  return <PlatformSearchInput />;
});
