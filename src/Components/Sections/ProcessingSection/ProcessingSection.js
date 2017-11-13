import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProcessingSection.css';

import like from '../../../images/like.png';
import list from '../../../images/list2.png';
import time from '../../../images/time.png';

const parameters = [
  {
    photo: {},
    title: 'Платите за результат',
    text: 'Оплатите уборку наличными и наслаждайтесь чистотой в вашем доме'
  },
  {
    photo: {},
    title: 'Платите ',
    text: 'Злате на лечение периминости'
  },
  {
    photo: {},
    title: 'Платите за чиво',
    text: 'И всё будет от и до!'
  }
];

var settings = {
  dots: true,
  speed: 500,
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  useCSS: true,
  className: 'site-slider',

};

class ProcessingSection extends Component {
  render() {
    return (
      <section className="processing-section">
        <div className="processing-section__inner-container">
          <h3 className="page__block-title">Как мы работаем</h3>
          <Slider {...settings}>
            <div className="processing-section__container">
              <div className="processing-section__parameter-container slick-slide">
              <div className="processing-section__parameter">
                <div className="processing-section__image-container">
                  <img src={list} alt="" className="processing-section__image"/>
                </div>
                <div className="processing-section__text-title">
                  Оставьте заявку
                </div>
                <div className="processing-section__description">
                  Укажите параметры уборки и выберите доступную дату
                </div>
              </div>
            </div>
            </div>
            <div className="processing-section__container">
              <div className="processing-section__parameter-container slick-slide">
                <div className="processing-section__parameter">
                  <div className="processing-section__image-container">
                    <img src={time} alt="" className="processing-section__image"/>
                  </div>
                  <div className="processing-section__text-title">
                    Дождитесь домработницу Звыш
                  </div>
                  <div className="processing-section__description">
                    Она приедет в удобное для Вас время и привезёт с собой всё необходимое
                  </div>
                </div>
              </div>
            </div>
            <div className="processing-section__container">
              <div className="processing-section__parameter-container slick-slide">
                <div className="processing-section__parameter">
                  <div className="processing-section__image-container">
                    <img src={like} alt="" className="processing-section__image"/>
                  </div>
                  <div className="processing-section__text-title">
                    Платите за результат
                  </div>
                  <div className="processing-section__description">
                    Оплатите уборку наличными и наслаждайтесь чистотой в Вашем доме
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
		  </section>
    );
  }
}

export default ProcessingSection;
