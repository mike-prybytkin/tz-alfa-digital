import React, { useContext } from 'react';
import Slider from 'react-slick';
import Button from 'components/UI/button/Button';
import { StoreProviderContext } from 'components/store/store-provider';

const SlickSlider = () => {
  const context = useContext(StoreProviderContext);
  const { filterSystem } = context;
  const { name, images } = filterSystem;

  const openImgInModal = (imgUrl: string) => {
  };

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img className="slider__preview-img" src={`${images[i]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-wrapper__heading">{name}</h2>
      <Slider {...settings}>
        {images.map((url) => (
          <div key={url} className="slider__wrapper-img">
            <Button
              text={<i className="fa fa-search-plus"></i>}
              type="colored"
              handler={() => openImgInModal(url)}
            />
            <img className="slider__select-img" src={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
