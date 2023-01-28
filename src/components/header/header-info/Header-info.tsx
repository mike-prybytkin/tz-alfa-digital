import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/UI/button/Button';

const HeaderInfo = () => {
  return (
    <div className="header-info layout-5-column">
      <NavLink to="/">
        <img
          className="header-info__logo-img"
          src="./assets/logo/company-logo.png"
          alt="alfa repaip building"
        />
      </NavLink>
      <div className="header-info__schedule">
        <p>Пн-Сб: c 10:00 до 20:00 Выходной: воскресенье</p>
      </div>
      <div className="header-info__to-order to-order">
        <i className="ico ico_colored to-order__icon fa fa-cubes"></i>
        <NavLink to="/call">
          <p className="to-order__link">Заказать 3D-макет дома</p>
        </NavLink>
      </div>
      <div className="contacts">
        <img
          className="contacts__ico"
          src="./assets/icons/contacts-ico.png"
          alt="alfa repaip building"
        />
        <div className="contacts-wrapper">
          <a className="contacts__tel" href="tel:+79151685550">
            +7 (915) 168-55-50
          </a>
          <div className="contacts__icons">
            <i className="ico ico_colored watsapp"></i>
            <i className="ico ico_colored telegram"></i>
            <i className="ico ico_colored viber"></i>
          </div>
        </div>
      </div>
      <div className="header-info__button">
        <NavLink to="/call">
          <Button text="Заказать звонок" type="colored" />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderInfo;
