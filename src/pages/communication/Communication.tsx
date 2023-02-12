import React from 'react';
import ContactsSectionForm from 'components/contacts-section-form/contacts-section-form';

const Communication = () => {
  return (
    <div className="wrapper">
      <div className="communication-page">
        <h3 className="communication-page__heading">
          Заполните форму и в течение 30 минут мы ответим на все Ваши вопросы
        </h3>
        <ContactsSectionForm />
      </div>
    </div>
  );
};

export default Communication;
