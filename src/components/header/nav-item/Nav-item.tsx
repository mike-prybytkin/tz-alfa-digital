import React from 'react';
import { NavItemProps } from 'share/types';
import { NavLink } from 'react-router-dom';

const NavItem = (props: NavItemProps) => {
  const { link } = props;
  return (
    <NavLink to={`nav/${link}`}>
      <li className="link">{link}</li>
    </NavLink>
  );
};

export default NavItem;
