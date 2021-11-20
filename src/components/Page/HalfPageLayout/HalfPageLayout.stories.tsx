import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatformHalfPageLayout } from './index';
storiesOf('Layout/Half Page Layout', module).add('Default', () => {
  return <PlatformHalfPageLayout>Hello World</PlatformHalfPageLayout>;
});
