import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Button from 'components/UI/button/Button';

const Footer = () => {
  const linkTemplate = (
    nodeId: string,
    text: string,
    anchorOffset = -25,
    navLink?: boolean,
    linkPath?: string
  ) => {
    return navLink && linkPath ? (
      <Link to={nodeId} smooth={true} duration={300} offset={anchorOffset}>
        <NavLink to={linkPath}>{text}</NavLink>
      </Link>
    ) : (
      <Link to={nodeId} smooth={true} duration={300} offset={anchorOffset}>
        {text}
      </Link>
    );
  };

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="layout-4-column footer-wrapper">
          <div className="footer-col-1">
            <Link to="header-info__logo-img" smooth={true} duration={300} offset={-35}>
              <img
                className="footer-col-1__logo-img"
                src="./assets/logo/company-logo.png"
                alt="alfa repaip building"
              />
            </Link>
            <NavLink to="/call">
              <Button text="Заказать звонок" type="bordered" />
            </NavLink>
          </div>

          <div className="footer-col-2">
            <ul>
              <li>{linkTemplate('header-info__logo-img', 'Главная', -30, true, '/')}</li>
              <li>{linkTemplate('catalog-of-houses', 'Каталог')}</li>
              <li>{linkTemplate('services', 'Услуги')}</li>
              <li>
                <NavLink to="/call">Расчёт стоимости</NavLink>
              </li>
              <li>
                <NavLink to="/call">Консультация архитектора</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-col-3">
            <ul>
              <li>
                <NavLink to="/call">Экскурсия на объект</NavLink>
              </li>
              <li>
                <NavLink to="/call">3D-макет дома</NavLink>
              </li>
              <li>{linkTemplate('about-us', 'О нас')}</li>
              <li>{linkTemplate('nav-contacts', 'Блог')}</li>
              <li>{linkTemplate('nav-blog', 'Контакты')}</li>
            </ul>
          </div>

          <div className="footer-col-4">
            <p>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>
            <ul>
              <li>
                <a href="https://vk.com/" target="blank">
                  <img src="./assets/icons/vk-ico.svg" alt="vk ico" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="blank">
                  <img src="./assets/icons/instagram-ico.svg" alt="instagram ico" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="blank">
                  <img src="./assets/icons/facebook-ico.svg" alt="facebook ico" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="blank">
                  <img src="./assets/icons/youtube-ico.svg" alt="youtube ico" />
                </a>
              </li>
            </ul>
            <p className="footer-col-4__author">Разработка и продвижение сайта:</p>
            <img
              className="footer-col-4__logo-img"
              src="./assets/logo/alfa-digital-logo.png"
              alt="alfa digital"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
