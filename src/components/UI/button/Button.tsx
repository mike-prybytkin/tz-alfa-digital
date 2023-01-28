import React from 'react';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const { text, type } = props;
  const buttonClass = `button button_${type}`;

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
