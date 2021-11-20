import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatformHeader } from './index';
storiesOf('Labels', module).add('SectionTitle', () => {
  return <PlatformHeader>Agent Information</PlatformHeader>;
});
