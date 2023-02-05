/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import { StoreProviderContext } from 'components/store/store-provider';
import Button from 'components/UI/button/Button';

const byttonStyle = {
  display: 'block',
  width: '50px',
  height: '50px',
  lineHeight: '70px',
  borderRadius: '50%',
  background: '#319F1C',
  textAlign: 'center',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
  border: '5px solid #FFFFFF',
  zIndex: '1',
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...byttonStyle,
        transform: 'translate(70%, -50%)',
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...byttonStyle,
        transform: 'translate(-70%, -50%)',
      }}
      onClick={onClick}
    />
  );
};

const SliderAllFilters = () => {
  const context = useContext(StoreProviderContext);
  const { filterSystems, setFilterSystem } = context;

  const selectSystem = (systemId: string) => {
    setFilterSystem(filterSystems.filter((el) => el.id === systemId)[0]);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  // about-filter__heading
  return (
    <div className="slider-all-filters">
      <Slider {...settings}>
        {filterSystems.map((system) => (
          <div key={system.id} className="card">
            <div className="card__content">
              <img className="card__img" src="./assets/slider/preview-img.png" />
              <div className="card__info">
                <h4 className="card__name">{system.name}</h4>
                <p className="card__number-of-users">До {system.numberOfUsers} человек</p>
                <p className="card__old-price">{system.oldPrise} ₽</p>
                <p className="card__price">{system.prise} ₽</p>
                <p className="card__efficiency">
                  Очистка: <span>{system.efficiency}</span>
                </p>
                <p className="card__salvo-discharge">
                  Залповый сброс: <span>{system.salvoDischarge}</span>
                </p>
              </div>
            </div>
            <div className="card__buttons">
              <Link to="about-filter__heading" smooth={true} duration={300}>
                <Button text="Подробнее" type="bordered" handler={() => selectSystem(system.id)} />
              </Link>
              <Button text="Заказать" type="colored" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderAllFilters;
