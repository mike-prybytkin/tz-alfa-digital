import React, { useContext } from 'react';
import Slider from 'react-slick';
import Button from 'components/UI/button/Button';
import { StoreProviderContext } from 'components/store/store-provider';

const SlickSlider = () => {
  const context = useContext(StoreProviderContext);
  const { filterSystem, openModal } = context;
  const { images } = filterSystem;

  const openImgInModal = (imgUrl: string) => {
    openModal(<img className="slider__modal-img" src={`${imgUrl}`} />);
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
    responsive: [
      { breakpoint: 1200, settings: { vertical: false, verticalSwiping: false, slidesToShow: 2 } },
      { breakpoint: 768, settings: { vertical: false, verticalSwiping: false, slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-wrapper">
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
