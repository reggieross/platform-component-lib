import { storiesOf } from '@storybook/react';
import React from 'react';
import { ColumnExample } from './index';
storiesOf('Column Example', module).add('Default', () => {
  return <ColumnExample>Hello World</ColumnExample>;
});
