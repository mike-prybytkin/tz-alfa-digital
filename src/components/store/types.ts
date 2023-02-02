import { ReactNode } from 'react';
import { IFilterSystem } from 'share/types';

export interface StoreProviderProps {
  children: ReactNode;
}

export interface IStoreProviderContext {
  filterSystem: IFilterSystem;
  modalIsOpen: boolean;
  openModal: (content: JSX.Element) => void;
  closeModal: () => void;
  modalWindowContent: JSX.Element;
}
