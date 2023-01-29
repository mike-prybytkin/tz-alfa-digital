import React from 'react';
import NavItemList from '../nav-item-list/Nav-item-list';
import { houseList, services, aboutUs, blog } from 'mocks/nav-menu';

const HeaderNav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <ul className="nav__items">
          <li className="nav__item">
            <NavItemList itemName="Каталог домов" linkInfo={houseList} />
          </li>
          <li className="nav__item">
            <NavItemList itemName="Услуги" linkInfo={services} />
          </li>
          <li className="nav__item">
            <NavItemList itemName="О нас" linkInfo={aboutUs} />
          </li>
          <li className="nav__item">
            <NavItemList itemName="Контакты" linkPath="contacts" linkInfo={null} />
          </li>
          <li className="nav__item">
            <NavItemList itemName="Блог" linkInfo={blog} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
