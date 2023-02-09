import React, { useContext } from 'react';
import SlickSlider from 'components/slick-slider/Slick-slider';
import ModalWindow from 'components/modal-window/modal-window';
import { StoreProviderContext } from 'components/store/store-provider';
import AboutFilterSystemForm from 'components/about-filter-system-form/about-filter-system-form';
import ServiceBar from 'components/service-bar/service-bar';
import { services } from 'mocks/nav-menu';

const AboutFilterSystem = () => {
  const context = useContext(StoreProviderContext);
  const { filterSystem } = context;
  const {
    name,
    numberOfUsers,
    efficiency,
    salvoDischarge,
    pipeDepth,
    consumedElectricity,
    prise,
    description,
  } = filterSystem;

  return (
    <div className="about-filter">
      <ServiceBar linkInfo={services} />
      <h2 className="about-filter__heading" id="about-filter__heading">
        {name}
      </h2>
      <div className="about-filter__content">
        <div className="about-filter__slider-contact">
          <SlickSlider />
          <h4>Обсудим детали?</h4>
          <AboutFilterSystemForm />
        </div>
        <div className="filter-characteristics">
          <div className="filter-characteristics__grid">
            <div>Количество пользователей:</div>
            <div>{numberOfUsers} человека</div>
            <div>Производительность:</div>
            <div>{efficiency}</div>
            <div>Объем залпового сброса:</div>
            <div>{salvoDischarge}</div>
            <div>Глубина подводящей трубы:</div>
            <div>{pipeDepth}</div>
            <div>Потребляемая электроэнергия:</div>
            <div>{consumedElectricity}</div>
          </div>
          <div className="filter-characteristics__prise">
            Цена: <span>{prise} ₽</span>
          </div>
          <div className="filter-characteristics__description">
            <h4>Описание модели</h4>
            <div>{description}</div>
          </div>
        </div>
      </div>
      <ModalWindow />
    </div>
  );
};

export default AboutFilterSystem;
