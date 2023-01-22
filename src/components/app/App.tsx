import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { IAppContext } from './types';
import { StoreProviderContext } from 'components/store/store-provider';

export const AppContext = createContext({} as IAppContext);

const App = () => {
  const context = useContext(StoreProviderContext);

  return <h1>Start</h1>;
};

export default App;
