import React from 'react';
import { BlockSeparatorProps } from './types';

const BlockSeparator = (props: BlockSeparatorProps) => {
  const { urlImg1, urlImg2 } = props;
  return (
    <div className="block-separator">
      <img className="block-separator__img" src={urlImg1} alt="" />
      <img className="block-separator__img" src={urlImg2} alt="" />
    </div>
  );
};

export default BlockSeparator;
