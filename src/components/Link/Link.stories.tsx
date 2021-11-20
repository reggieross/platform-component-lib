import { storiesOf } from '@storybook/react';
import { PlatformLink } from './index';
import React from 'react';

storiesOf('Link', module)
  .add('Default', () => {
    return <PlatformLink text={'Forgot Your password?'} />;
  })
  .add('Link Disabled', () => {
    return <PlatformLink text={'Forgot your password?'} disabled={true} />;
  });
