import React, { createContext, useState } from 'react';
import { IStoreProviderContext, StoreProviderProps } from './types';
import systems from 'mocks/slider';
import { IFilterSystem } from 'share/types';

const StoreProviderContext = createContext<IStoreProviderContext>({
  filterSystem: systems.topas_c4,
});

const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const [filterSystem, setFilterSystem] = useState<IFilterSystem>(systems.topas_c4);

  return (
    <StoreProviderContext.Provider value={{ filterSystem }}>
      {children}
    </StoreProviderContext.Provider>
  );
};

export { StoreProvider, StoreProviderContext };
