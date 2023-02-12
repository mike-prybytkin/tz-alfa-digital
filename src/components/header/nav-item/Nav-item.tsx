import React from 'react';
import { NavItemProps } from 'share/types';
import { NavLink } from 'react-router-dom';

const NavItem = (props: NavItemProps) => {
  const { link, onCloseBurger } = props;
  return (
    <NavLink to={`nav/${link}`}>
      <li className="link" onClick={onCloseBurger}>
        {link}
      </li>
    </NavLink>
  );
};

export default NavItem;
