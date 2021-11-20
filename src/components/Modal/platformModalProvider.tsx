import React, { Component, FC, useState } from 'react';
import { PlatformModalContext } from './platformModalContext';
import { PlatformModalRoot } from './platformModalRoot';

const PlatfromModalProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState<{
    component: Component | FC | null;
    props: Record<any, any>;
  }>();

  const showModal = (
    component: React.Component,
    props: Record<any, any> = {}
  ): void => {
    setModalState({
      component,
      props,
    });
  };

  const hideModal = (): void =>
    setModalState({
      component: null,
      props: {},
    });

  return (
    <PlatformModalContext.Provider
      value={{
        ...modalState,
        showModal,
        hideModal,
      }}
    >
      <PlatformModalRoot />
      {children}
    </PlatformModalContext.Provider>
  );
};
