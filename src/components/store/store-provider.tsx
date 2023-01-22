import React, { createContext } from 'react';
import { IStoreProviderContext, StoreProviderProps } from './types';

const StoreProviderContext = createContext({} as IStoreProviderContext);

const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;

  return <StoreProviderContext.Provider>{children}</StoreProviderContext.Provider>;
};

export { StoreProvider, StoreProviderContext };
