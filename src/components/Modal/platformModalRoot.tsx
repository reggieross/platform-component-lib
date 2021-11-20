import { PlatformModalConsumer } from './platformModalConsumer';
import React from 'react';

export const PlatformModalRoot: React.FC = () => (
  <PlatformModalConsumer>
    {({ component: Component, props, hideModal }) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Component ? <Component {...props} onClose={hideModal} /> : null
    }
  </PlatformModalConsumer>
);
