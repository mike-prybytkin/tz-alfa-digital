import React, { useState } from 'react';
import NavItemList from '../nav-item-list/Nav-item-list';
import { houseList, services, aboutUs, blog } from 'mocks/nav-menu';

const HeaderNav = () => {
  const items = [
    { id: 'catalog-of-houses', name: 'Каталог домов', itemList: houseList },
    { id: 'services', name: 'Услуги', itemList: services },
    { id: 'about-us', name: 'О нас', itemList: aboutUs },
    { id: 'nav-contacts', name: 'Контакты', itemList: null },
    { id: 'nav-blog', name: 'Блог', itemList: blog },
  ];

  const [isNavItemID, setIsNavItemID] = useState('');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const navItemsHandler = (id: string) => {
    setIsNavItemID(id);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  const burgerButtonClass = isBurgerOpen ? 'open nav__burger-button' : 'nav__burger-button';
  const burgerButtonIcoClass = isBurgerOpen ? 'open nav__burger-ico' : 'nav__burger-ico';
  const navItemsClass = isBurgerOpen ? 'open-burger nav__items' : 'nav__items';

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <ul className={navItemsClass}>
          {items.map((item) => (
            <li
              className="nav__item"
              id={item.id}
              key={item.id}
              onClick={() => navItemsHandler(item.id)}
            >
              <NavItemList
                itemName={item.name}
                linkInfo={item.itemList}
                id={item.id}
                isOpenItemId={isNavItemID}
                linkPath={item.itemList === null ? item.id : null}
                onCloseBurger={closeBurger}
              />
            </li>
          ))}
        </ul>
        <button className={burgerButtonClass} onClick={toggleBurger}>
          <i className={`${burgerButtonIcoClass} fa fa-chevron-down`}></i>
        </button>
      </nav>
    </div>
  );
};

export default HeaderNav;
