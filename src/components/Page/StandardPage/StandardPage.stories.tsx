import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatformStandardPage } from './index';
storiesOf('Layout/Standard Page', module).add('Default', () => {
  return <PlatformStandardPage>Hello World</PlatformStandardPage>;
});
