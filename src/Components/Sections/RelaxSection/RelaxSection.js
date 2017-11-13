import React, { Component } from 'react';
import './RelaxSection.css';

import love from '../../../images/love.png';
import list from '../../../images/list.png';
import music from '../../../images/music.png';
import cottage from '../../../images/cottage.png';


class RelaxSection extends Component {
  render() {

    const renderOptions = this.props.isCottage ?
      <div className="relax-section__option-container">
        <div className="relax-section__option">
          <div className="relax-section__image-container">
            <img className="relax-section__image" src={cottage} alt=""/>
          </div>
          <span className="relax-section__text">Убирать коттедж самостоятельно - настоящее мучение</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

        <div className="relax-section__option">
          <div className="relax-section__image-container">
            <img className="relax-section__image" src={music} alt=""/>
          </div>
          <span className="relax-section__text">Вместо уборки вы предпочли бы проводить время за любимым делом или в кругу друзей и близких</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

        <div className="relax-section__option">
          <div className="relax-section__image-container relax-section__image-container--love">
            <img className="relax-section__image" src={love} alt=""/>
          </div>
          <span className="relax-section__text">Мы подарим вам чистоту и возможность заниматься тем, что действительно радует.</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

      </div>
      :
      <div className="relax-section__option-container">
        <div className="relax-section__option">
          <div className="relax-section__image-container">
            <img className="relax-section__image" src={music} alt=""/>
          </div>
          <span className="relax-section__text">Вы хотите проводить время с семьёй или за любимым делом</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

        <div className="relax-section__option">
          <div className="relax-section__image-container relax-section__image-container--list">
            <img className="relax-section__image" src={list} alt=""/>
          </div>
          <span className="relax-section__text">Уборка в доме никак не вписывается в Ваши планы</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

        <div className="relax-section__option">
          <div className="relax-section__image-container relax-section__image-container--love">
            <img className="relax-section__image" src={love} alt=""/>
          </div>
          <span className="relax-section__text">Мы подарим Вам чистоту и свободное время на родных и близких!</span>
          <div className="relax-section__circle-container">
            <div className="relax-section__circle"></div>
          </div>
        </div>

      </div>;

    return (
      <section className="relax-section">
        <div className="relax-section__inner-container">
          <h3 className="page__block-title">Отдыхайте! Чистоту дома мы возьмём на себя</h3>
          {renderOptions}
          <div className="relax-section__line">
          </div>
      </div>
      </section>
    );
  }
}

export default RelaxSection;
