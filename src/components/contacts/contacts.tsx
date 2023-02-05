import React from 'react';
import ContactsSectionForm from 'components/contacts-section-form/contacts-section-form';

const Contacts = () => {
  return (
    <div className="contacts-section layout-2-column">
      <div className="contacts-section__background">
        <img
          className="contacts-section__sky-img"
          src="./assets/bg-img/sky.png"
          alt="filter system"
        />
        <img
          className="contacts-section__filter-img"
          src="./assets/bg-img/bg-contacts-section.png"
          alt="filter system"
        />
      </div>
      <div className="contacts-section__form">
        <h4>Не нашли то, что искали?</h4>
        <p>Заполните форму и мы перезвоним вам в течение 30 минут!</p>
        <ContactsSectionForm />
      </div>
      <div className="contacts-section__background-right">
        <img
          className="contacts-section__wrench-img"
          src="./assets/bg-img/wrench.png"
          alt="filter system"
        />
      </div>
    </div>
  );
};

export default Contacts;
