import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import TextInput from 'components/UI/text-input/text-input';
import { IUserContactsForm } from 'share/types';
import { notifyMessage } from 'components/UI/toast/toast';

const initialState: IUserContactsForm = {
  name: '',
  phone: '',
};

const AboutFilterSystemForm = () => {
  const [userContacts, setUserContacts] = useState(initialState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserContactsForm>();

  const onSubmit: SubmitHandler<IUserContactsForm> = (data) => {
    const { name, phone } = data;
    setUserContacts({
      name: name,
      phone: phone,
    });
    reset();
    notifyMessage({ message: `${name} спасибо! Мы скоро перезвоним!`, type: 'success' });
  };
  return (
    <form className="user-contacts-form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name={'name'}
        id={'name-contacts-form'}
        placeholderText={'Ваше имя'}
        errors={errors}
        register={register}
        validationSchema={{
          required: 'введите ваше имя',
          pattern: {
            value: /^[0-9a-zA-Zа-яёА-ЯЁ_-]{2,16}$/,
            message: '2-16 символов без пробелов',
          },
        }}
        required
      />

      <TextInput
        type="text"
        name={'phone'}
        id={'phone-contacts-form'}
        placeholderText={'Номер телефона'}
        errors={errors}
        register={register}
        validationSchema={{
          required: 'ваш номер телефона',
          pattern: {
            value: /^[0-9-()+ ]{13,19}$/,
            message: 'следуйте формату +375(29)111-11-11',
          },
        }}
        required
      />
      <input
        className="user-contacts-form__button button button_colored"
        type="submit"
        value={'Хочу обсудить детали'}
      />
    </form>
  );
};

export default AboutFilterSystemForm;
