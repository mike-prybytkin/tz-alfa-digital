import { ReactNode } from 'react';

export type ButtonProps = {
  text: string | ReactNode;
  type: 'colored' | 'bordered';
  handler?: () => void;
};
