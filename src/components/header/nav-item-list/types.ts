import { NavItemProps } from 'share/types';

export interface NavItemListProps {
  linkInfo?: NavItemProps[] | null;
  itemName: string;
  linkPath?: string | null;
  id: string;
  isOpenItemId: string;
  onCloseBurger: () => void;
}
