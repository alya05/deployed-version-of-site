import React, { Component } from 'react';
import './CalculatorMini.css';
import { NavLink } from 'react-router-dom'

class CalculatorMiniCottage extends Component {

  renderMetersCount =(bathroomCount) => {
    if (bathroomCount === 1) {
      return bathroomCount + ' санузел'
    }

    if (bathroomCount == 5) {
      return  bathroomCount + ' санузлов'
    }

    return bathroomCount + ' санузла'
  };

  renderRoomCount = (roomCount) => {
    if (roomCount === 1) {
      return roomCount + ' комната'
    }

    if (roomCount === 5) {
      return roomCount + ' комнат'
    }

    if (roomCount > 1) {
      return roomCount + ' комнаты'
    }
  };


  render() {
    const {price, addMeters, removeMeters, metersCount} = this.props.mainSectionProps;
    return (
      <div className="calculator-mini calculator-mini--cottage">
        <div className="calculator-mini__inner-container calculator-mini__inner-container--cottage">

          <div className="calculator-mini__button-block calculator-mini__button-block--cottage">
            <div className="calculator-mini__button-block-inner-container">
              <div onClick={removeMeters} className="calculator-mini__button-block-button">–</div>
              <div className="calculator-mini__button-block-text">{metersCount + ' кв.м'}</div>
              <div onClick={addMeters} className="calculator-mini__button-block-button">+</div>
            </div>
          </div>
          <div className="calculator-mini__button-block calculator-mini__button-block_makeorder-style calculator-mini__button-block_makeorder-style--cottage">
            <div className="calculator-mini__button-block-inner-container">
              <NavLink to={'/order/cottage'} className="calculator-mini__button-block-text calculator-mini__button-block-text_makeorder-style">
              <div className="order__button">Заказать уборку от 0.8р/м<sup>2</sup></div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorMiniCottage;
