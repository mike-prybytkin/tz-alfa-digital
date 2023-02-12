import React from 'react';
import { Outlet } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
};

export default NavigationLinks;
