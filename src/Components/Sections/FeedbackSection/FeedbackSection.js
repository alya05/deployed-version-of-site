import React, { Component } from 'react';
import './feedbackSection.css';


import feedback1 from '../../../images/feedback1.png';
import feedback2 from '../../../images/feedback2.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
  dots: true,
  speed: 500,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  useCSS: true,
};


class FeedbackSection extends Component {
    constructor(props) {
        super(props);

      this.state = {
        isMobile: false,

      }
    }

  componentWillMount () {
    if (window.innerWidth < 750) {
      this.setState({
        isMobile: true,
      });
    }
  }

    render() {

      const feedbackSectionContainer = this.state.isMobile ?
        <div className="feedback-section__feedback-container">
            <Slider {...settings}>
                <div className="feedback-section__container">
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={feedback1} alt=""/>
                        </div>
                        <div className="feedback-section__name">Лариса Галкина</div>
                        <div className="feedback-section__feedback-text">
                            Заказала уборку в Звыш и осталась довольна! Ко мне приехали в удобное для меня время. Домработница Наталия очень милая, вежливая и что самое главное - профессионал. По окончанию уборки я заметила минимальные недочеты (пыль на светильнике), но их тут же исправили без каких либо вопросов. Что могу сказать? В Солигорске такого отношения к клиентам я не встречала!
                        </div>
                    </div>
                </div>
                <div className="feedback-section__container">
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={feedback2} alt=""/>
                        </div>
                        <div className="feedback-section__name">Людмила Корж</div>
                        <div className="feedback-section__feedback-text">
                            Очень не хочу тратить весь мой выходной на уборку! Узнала про клининг Звыш. Такие приятные люди! Сделала заказ на сайте (дали скидку 15 рублей): генеральная уборка и мойка плиты. Приехали две приятные домработницы. С собой у них было всё: от швабр и моющих до фартуков и перчаток. Очень срочно нужно было уехать, и потому пришлось оставить их одних. Такой чистоты у меня ещё никогда не было! Обязательно буду вас рекомендовать своим знакомым.
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        :
        <div className="feedback-section__feedback-container">
                <div className="feedback-section__container">
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={feedback1} alt=""/>
                        </div>
                        <div className="feedback-section__name">Лариса Галкина</div>
                        <div className="feedback-section__feedback-text">Заказала уборку своей однушки в Звыш и осталась довольна! Ко мне приехали в удобное для меня время. Домработница Наталия очень милая, вежливая и что самое главное - профессионал. По окончанию уборки я заметила минимальные недочеты (пыль на светильнике), но их тут же исправили без каких либо вопросов. Что могу сказать? В Солигорске такого отношения к клиентам я не встречала! Ещё и скидку сделали!
                        </div>
                    </div>
                </div>
                <div className="feedback-section__container">
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={feedback2} alt=""/>
                        </div>
                        <div className="feedback-section__name">Людмила Корж</div>
                        <div className="feedback-section__feedback-text">
                            Очень не хочу тратить весь мой выходной на уборку! Узнала про клининг Звыш. Такие приятные люди! Сделала заказ на сайте (дали скидку 15 рублей): генеральная уборка и мойка плиты. Перезвонили и сказали, что приедут две девушки. Они просто чудо.  С собой у них было всё: от швабр и моющих до фартуков и перчаток. Очень срочно нужно было уехать, и потому пришлось оставить их одних. Такой чистоты у меня ещё никогда не было! Обязательно буду вас рекомендовать своим знакомым.
                        </div>
                    </div>
                </div>
        </div>;
      return (
          <section className="feedback-section">
            <div className="feedback-section__inner-container">
                <h3 className="page__block-title">Отзывы наших первых пользователей</h3>
              {feedbackSectionContainer}
            </div>
          </section>
     );
    }
}

export default FeedbackSection;
