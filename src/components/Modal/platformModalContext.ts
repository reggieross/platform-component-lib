import React, { createContext, Component, FC } from 'react';

export type PlatformModalContext = {
  component: Component | FC | null;
  props: Record<any, any>;
  showModal: (component: React.Component, props: Record<any, any>) => void;
  hideModal: () => void;
};

export const PlatformModalContext = createContext<PlatformModalContext>({
  component: null,
  props: {},
  showModal: () => {
    return;
  },
  hideModal: () => {
    return;
  },
});
