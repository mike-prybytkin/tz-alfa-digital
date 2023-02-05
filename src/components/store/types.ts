import { ReactNode, Dispatch, SetStateAction } from 'react';
import { IFilterSystem } from 'share/types';

export interface StoreProviderProps {
  children: ReactNode;
}

export interface IStoreProviderContext {
  filterSystem: IFilterSystem;
  setFilterSystem: Dispatch<SetStateAction<IFilterSystem>>;
  modalIsOpen: boolean;
  openModal: (content: JSX.Element) => void;
  closeModal: () => void;
  modalWindowContent: JSX.Element;
  filterSystems: IFilterSystem[];
}
