import { ReactNode } from 'react';
import { IFilterSystem } from 'share/types';

export interface StoreProviderProps {
  children: ReactNode;
}

export interface IStoreProviderContext {
  filterSystem: IFilterSystem;
}
