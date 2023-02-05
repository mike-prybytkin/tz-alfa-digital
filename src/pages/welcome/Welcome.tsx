import React from 'react';
import AboutFilterSystem from 'components/about-filter-system/about-filter-system';
import BlockSeparator from 'components/block-separator/block-separator';
import SliderAllFilters from 'components/slider-all-filters/slider-all-filters';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wrapper">
        <AboutFilterSystem />
      </div>
      <BlockSeparator urlImg1="./assets/bg-img/water.png" urlImg2="./assets/bg-img/pipes.png" />
      <div className="wrapper">
        <h3 className="welcome__section-heading">Вам также могут понравиться</h3>
        <div className="welcome__slider-all-filters-wrapper">
          <SliderAllFilters />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
