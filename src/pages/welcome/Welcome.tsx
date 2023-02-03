import React, { Fragment } from 'react';
import AboutFilterSystem from 'components/about-filter-system/about-filter-system';
import BlockSeparator from 'components/block-separator/block-separator';

const Welcome = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <AboutFilterSystem />
      </div>
      <BlockSeparator urlImg1="./assets/bg-img/water.png" urlImg2="./assets/bg-img/pipes.png" />
    </Fragment>
  );
};

export default Welcome;
