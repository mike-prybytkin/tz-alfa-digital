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

  const navItemsHandler = (id: string) => {
    setIsNavItemID(id);
  };

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <ul className="nav__items">
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
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
