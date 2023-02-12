import React, { createContext, useState, Fragment } from 'react';
import { IStoreProviderContext, StoreProviderProps } from './types';
import filterSystems from 'mocks/filter-systems';
import { IFilterSystem } from 'share/types';

const StoreProviderContext = createContext({} as IStoreProviderContext);

const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const [filterSystem, setFilterSystem] = useState<IFilterSystem>(filterSystems[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalWindowContent, setModalWindowContent] = useState(<Fragment></Fragment>);

  const openModal = (content: JSX.Element) => {
    setModalWindowContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StoreProviderContext.Provider
      value={{
        filterSystem,
        setFilterSystem,
        modalIsOpen,
        openModal,
        closeModal,
        modalWindowContent,
        filterSystems,
      }}
    >
      {children}
    </StoreProviderContext.Provider>
  );
};

export { StoreProvider, StoreProviderContext };
