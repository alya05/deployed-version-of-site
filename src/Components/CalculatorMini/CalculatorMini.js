import React, { Component } from 'react';
import './CalculatorMini.css';
import { NavLink } from 'react-router-dom'

class CalculatorMini extends Component {

  renderBathroomCount =(bathroomCount) => {
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
    const {roomCount, bathroomCount, addRoom, removeRoom, addBathRoom, removeBathRoom, price} = this.props.mainSectionProps;
    return (
      <div className="calculator-mini">
        <div className="calculator-mini__inner-container">
          <div className="calculator-mini__button-block">
            <div className="calculator-mini__button-block-inner-container">
              <div onClick={removeRoom} className="calculator-mini__button-block-button">–</div>
              <div className="calculator-mini__button-block-text">{this.renderRoomCount(roomCount)}</div>
              <div onClick={addRoom} className="calculator-mini__button-block-button">+</div>
            </div>
          </div>
          <div className="calculator-mini__button-block">
            <div className="calculator-mini__button-block-inner-container">
              <div onClick={removeBathRoom} className="calculator-mini__button-block-button">–</div>
              <div className="calculator-mini__button-block-text">{this.renderBathroomCount(bathroomCount)}</div>
              <div onClick={addBathRoom} className="calculator-mini__button-block-button">+</div>
            </div>
          </div>
          <div className="calculator-mini__button-block calculator-mini__button-block_makeorder-style">
            <div className="calculator-mini__button-block-inner-container">
              <NavLink to={'/order/flat'} className="calculator-mini__button-block-text calculator-mini__button-block-text_makeorder-style">
              <div className="order__button">Заказать уборку от {price}р.</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorMini;
