import React from 'react';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
  const { type, name, id, labelType, placeholderText, errors, register, validationSchema } = props;
  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={name}>
        {labelType}
        <input
          className="text-input__input"
          type={type}
          placeholder={placeholderText}
          id={id}
          {...register(name, validationSchema)}
        />
        {errors && errors[name]?.type === 'required' && (
          <span className="text-input__error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'minLength' && (
          <span className="text-input__error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'maxLength' && (
          <span className="text-input__error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === 'pattern' && (
          <span className="text-input__error">{errors[name]?.message}</span>
        )}
      </label>
    </div>
  );
};

export default TextInput;
