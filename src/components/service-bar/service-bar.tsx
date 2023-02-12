import React from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceBarProps } from './types';

const ServiceBar = (props: ServiceBarProps) => {
  const { linkInfo } = props;
  return (
    <div className="service-bar">
      {linkInfo.map((el) => {
        const { ico, link, id } = el;
        return (
          <NavLink className="service-bar__link" to={`nav/${link}`} key={id}>
            <img className="service-bar__link-img" src={ico} alt={link} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default ServiceBar;
