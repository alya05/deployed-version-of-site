import React, { Component } from 'react';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'


const blockElements = {
  animator: "accordion-animator",
  content: "accordion-content",
  label: "accordion-title",
  panel: "accordion-panel"
};
const bemModifiers = {
  animated: "animated",
  between: "between",
  checked: "checked",
  content: "content",
  disabled: "disabled",
  enabled: "enabled",
  first: "first",
  hidden: "hidden",
  last: "last",
  noContent: "no-content",
  unchecked: "unchecked"
};


class OrderInfo extends Component {
  constructor(){
    super();
  }


  renderOrderHeader = () => {
    let rooms = '';
    let baths = '';
    let roomCount = this.props.roomCount;
    let bathroomCount = this.props.bathroomCount;
    let isSupportive = this.props.isSupportive;
    if (roomCount > 1) {
      rooms = ' жилыми комнатами'
    } else {
      rooms = '-ой жилой комнатой'
    }

    if (bathroomCount > 1) {
      baths = ' ванными комнатами'
    } else {
      baths = '-ой ванной комнатой'
    }

    return (
      'Уборка кваритры с ' + roomCount + rooms + ' и ' + bathroomCount + baths
    );
  };

  renderOptionsList = () => {
    let options = this.props.options;
    let descriptions = [];
    for(let indexOption in options) {
      if (options[indexOption].checked) {
        descriptions.push(options[indexOption]);
      }
    }
    return (
          descriptions.map((item, index) => {
            let totalPrice = item.count*item.price;
            return (
              <div className="calculator__order-info-container">
                <span className="calculator__order-info-text">{item.description} ({item.count})</span>
                <span className="calculator__order-info-text-blue">{totalPrice} BYN</span>
                  </div>
                  )
            }
          )
    )
  };

  renderPromoCodeBlock = () => {
    console.log(this.props);
    if (!this.props.sale) {
      return (
        <div className="calculator__order-info-container calculator__order-info-container--promo">
          <input onChange={this.props.changePromoCode}  className="calculator__order-info-input" maxLength="10" placeholder="Промокод"/>
          <div onClick={this.props.applyPromoCode} className="calculator__order-info-button-code">Применить</div>
        </div>
      )
    } else { return (
      <div>
        <div className="calculator__order-info-container--sale calculator__order-info-container">
          <span className="calculator__order-info-text">Cкидка:</span>
          <span className="calculator__order-info-text-blue">{this.props.sale} BYN</span>
        </div>
        <div className="calculator__order-info-container--total calculator__order-info-container">
          <span className="calculator__order-info-text">Итого:</span>
          <span className="calculator__order-info-text-blue">{(+this.props.price) - (+this.props.sale)} BYN</span>
        </div>
      </div>
    )
    }
  };

  renderTimeDate = () => {
    if (this.props.date === null) {
      return '';
    } else
    {
      return this.props.date.format('DD.MM.YYYY') + ' / ' + this.props.time;
    }
  };


  render() {
    return (
      <div id='orderInfoContainer' className="calculator__order-info">
        <div id='orderInfo'>
          <div className="calculator__order-info__inner-container">
            <div className="calculator__order-info-header">
              {this.renderOrderHeader()}
            </div>
            <div className="calculator__order-info-container">
              <span className="calculator__order-info-text">Дата и время уборки:</span>
              <span className="calculator__order-info-text-blue">{this.renderTimeDate()}</span>
            </div>
            <div className="calculator__order-info-container">
              <span className="calculator__order-info-text">Продолжительность уборки:</span>
              <span className="calculator__order-info-text-blue">~ {this.props.timeСlean}</span>
            </div>
            <div className="calculator__order-info-container calculator__order-info-container--options">
              <span className="calculator__order-info-text">Дополнительно:</span>
              <span className="calculator__order-info-text-blue"></span>
            </div>
            {this.renderOptionsList()}
            <div className="calculator__order-info-container calculator__order-info-container--price">
              <span className="calculator__order-info-text">К оплате:</span>
              <span className="calculator__order-info-text-blue">{this.props.price} BYN</span>
            </div>
            {this.renderPromoCodeBlock()}
            <div onClick={this.props.createOrder} className="calculator__order-info-button-submit">Заказать уборку</div>
            <div className="calculator__order-info-agreement">
            <span>Нажимая кнопку, Вы принимаете условия
              <span><NavLink className="calculator__agreement-link" to={'/terms'}> пользовательского соглашения</NavLink></span>
            </span>
            </div>
          </div>
          <div className="calculator__order-info__questions">
            <Tabbordion blockElements={blockElements}
                        className="accordion"
                        animateContent="height"
                        name="tabs"
                        bemModifiers={bemModifiers}
                        mode="toggle"
                        component="ul">
              <TabPanel>
                <TabLabel>Как изменить или отменить заказ?</TabLabel>
                <TabContent>
                  <p>Вы можете отменить или изменить заказ, позвонив в
                    службу поддержки по телефону +375 (33) 389-13-76.
                  </p>
                </TabContent>
              </TabPanel>
              <TabPanel>
                <TabLabel>Что входит в уборку от Звыш?</TabLabel>
                <TabContent>
                  <p>Мы занимаемся уборкой квартир и коттеджей. Подробнее можно почитать тут. (ссылка на полный список)
                  </p>
                </TabContent>
              </TabPanel>
            </Tabbordion>
          </div>
        </div>
      </div>
    )
  }
}
export default OrderInfo;

