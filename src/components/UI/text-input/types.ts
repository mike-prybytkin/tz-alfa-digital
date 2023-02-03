/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form';
import { IUserContactsForm, InputFieldName } from 'share/types';

export interface TextInputProps {
  type: string;
  name: InputFieldName;
  id: string;
  labelType?: string;
  placeholderText: string;
  errors: any;
  register: UseFormRegister<IUserContactsForm>;
  validationSchema: any;
  required: boolean;
}
