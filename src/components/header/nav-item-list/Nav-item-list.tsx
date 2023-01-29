import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../nav-item/Nav-item';
import { NavItemListProps } from './types';

const NavItemList = (props: NavItemListProps) => {
  const { itemName, linkInfo, linkPath } = props;
  const [open, setOpen] = useState(false);

  const icoClass = open ? 'open nav__item-ico fa fa-caret-down' : 'nav__item-ico fa fa-caret-down';
  const navItemListClass = open ? 'open nav-item-list' : 'nav-item-list';

  return (
    <div className="nav__category" onClick={() => setOpen(!open)}>
      {linkInfo ? (
        <span>{itemName}</span>
      ) : (
        <NavLink className="link" to={`nav/${linkPath}`}>
          {itemName}
        </NavLink>
      )}

      {linkInfo ? <i className={icoClass}></i> : ''}
      {linkInfo ? (
        <ul className={navItemListClass}>
          {linkInfo.map((link) => (
            <NavItem link={link.link} key={link.id} id={link.id} />
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavItemList;
