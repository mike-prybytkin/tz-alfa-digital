import React from 'react';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const { text, type, handler } = props;
  const buttonClass = `button button_${type}`;

  return (
    <button className={buttonClass} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
