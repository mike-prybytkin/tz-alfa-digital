import React from 'react';
import { useParams } from 'react-router-dom';

const NavigationLink = () => {
  const params = useParams();
  const homeId = params.id ?? '';

  return (
    <div className="navigation-link">
      <p>Компонент с информацией об</p>
      <h3 className="navigation-link__heading">{homeId}</h3>
    </div>
  );
};

export default NavigationLink;
