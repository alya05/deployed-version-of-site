import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import 'react-select/dist/react-select.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import {CircleLoader} from 'react-spinners';
import './Calculator.css';
import OrderInfo from '../../Components/OrderInfo/OrderInfo';

import moment from 'moment';
import 'moment/locale/ru'
import * as PRICES from '../../constants/price';
import * as TIMES from '../../constants/time';

import logo from '../../images/main-logo-calculator.png';

import fridge from '../../images/fridge.png';
import fridgeActive from '../../images/fridgeActive.png';

import oven from '../../images/oven.png';
import ovenActive from '../../images/ovenActive.png';

import windowImage from '../../images/window.png';
import windowActiveImage from '../../images/windowActive.png';

import balcony from '../../images/balcony.png';
import balconyActive from '../../images/balconyActive.png';

import cutlery from '../../images/cutlery.png';
import cutleryActive from '../../images/cutleryActive.png';

import microwave from '../../images/microwave.png';
import microwaveActive from '../../images/microwaveActive.png';

import kitchen from '../../images/kitchen.png'
import kitchenActive from '../../images/kitchenActive.png'

import iron from '../../images/iron.png'
import ironActive from '../../images/ironActive.png'

import chandelier from '../../images/chandelier.png'
import chandelierActive from '../../images/chandelierActive.png'

import tray from '../../images/tray.png'
import trayActive from '../../images/trayActive.png'

import drawer from '../../images/drawer.png'
import drawerActive from '../../images/drawerActive.png'

import bathtub from '../../images/bathtub.png'
import bathtubActive from '../../images/bathtubActive.png'

class CalculatorCottage extends Component {
  constructor(props) {
    super(props);
    moment.locale('ru');
    this.state = {
      metersCount: this.props.defaultValues.metersCount || 200,
      userInfo: {},
      address: {},
      comment: '',
      date: null,
      time: '',
      sale: null,
      promoCode: null,
      isHoover: false,
      isSupportive: true,
      isComplex: false,
      isScrollBlock: false,
      baseCottagePrice: PRICES.COTTAGE_SUPPORTIVE_PRICE,
      times: [
        {value: '8.00', label: '8.00'},
        {value: '8.30', label: '8.30'},
        {value: '9.00', label: '9.00'},
        {value: '9.30', label: '9.30'},
        {value: '10.00', label: '10.00'},
        {value: '10.30', label: '10.30'},
        {value: '11.00', label: '11.00'},
        {value: '11.30', label: '11.30'},
        {value: '12.00', label: '12.00'},
        {value: '12.30', label: '12.30'},
        {value: '13.00', label: '13.00'},
        {value: '13.30', label: '13.30'},
        {value: '14.00', label: '14.00'},
        {value: '14.30', label: '14.30'},
        {value: '15.00', label: '15.00'},
        {value: '15.30', label: '15.30'},
        {value: '16.00', label: '16.00'},
        {value: '16.30', label: '16.30'},
        {value: '17.00', label: '17.00'},
      ],
      cities: [
        {value: 'Cолигорск', label: 'Cолигорск'},
        {value: 'Поместье', label: 'Поместье'},
        {value: 'Кулаки', label: 'Кулаки'},
        {value: 'Тычины', label: 'Тычины'},
        {value: 'Чижевичи', label: 'Чижевичи'},
      ],
      options: {
        window: {
          checked: false,
          count: 0,
          description: 'Окна',
          price: PRICES.WINDOW_PRICE
        },
        balcony: {
          checked: false,
          count: 0,
          description: 'Балкон',
          price: PRICES.BALCONY_PRICE,
        },
        cutlery: {
          checked: false,
          count: 0,
          description: 'Посуда',
          price: PRICES.DISHES_PRICE,

        },
        fridge: {
          checked: false,
          count: 0,
          description: 'Холодильник',
          price: PRICES.FRIDGE_PRICE,
        },
        oven: {
          checked: false,
          count: 0,
          description: 'Духовка',
          price: PRICES.OVEN_PRICE,
        },
        microwave: {
          checked: false,
          count: 0,
          description: 'Микроволновка',
          price: PRICES.MICROWAVE_PRICE,
        },
        kitchen: {
          checked: false,
          count: 0,
          description: 'Внутри кухонных шкафов',
          price: PRICES.KITCHEN_PRICE,
        },
        iron: {
          checked: false,
          count: 0,
          description: 'Глажка',
          price: PRICES.IRONING_PRICE,
        },
        chandelier: {
          checked: false,
          count: 0,
          description: 'Люстры',
          price: PRICES.CHANDELIER_PRICE,
        },
        tray: {
          checked: false,
          count: 0,
          description: 'Лоток питомца',
          price: PRICES.TRAY_PRICE,
        },
        drawer: {
          checked: false,
          count: 0,
          description: 'Фасады мебели',
          price: PRICES.DRAWER_PRICE,
        },
        bathtub : {
          checked: false,
          count: 0,
          description: 'Стенны в ванной',
          price: PRICES.BATHROOM_WALL_PRICE,
        },
      }
    }
  }

  createOrder = () => {
    console.log(window.location);
    if(this.checkIsDataValid()) {
      const options = [];
      for (let option in this.state.options) {
        if (this.state.options[option].checked) {
          options.push({description: this.state.options[option].description, count: this.state.options[option].count});
        }
      }

      const order = {
        metersCount: this.state.metersCount,
        address: this.state.address,
        userInfo: this.state.userInfo,
        options: options,
        isHoover: this.state.isHoover,
        date: this.state.date._d,
        time: this.state.time,
        price: this.state.price,
        sale: this.state.sale,
        promoCode: this.state.promoCode,
        comment: this.state.comment
      };

      debugger;


      const url = '/api/orders';

      // fetch(url, {
      //   method: 'post',
      //   body: JSON.stringify(order),
      //   headers: {
      //     'Content-type': 'application/json',
      //   }
      // })
      //   .then(response => {
      //     alert(response);
      //   })

    }
  };

  checkIsDataValid = () => {
    if (!this.state.date) {
      this.refs.date.setFocus();
      alert("Выберите дату");
      return;
    }

    if(!this.state.time) {
      this.refs.time.handleInputFocus();
      alert("Выберите время");
      return;
    }
    const refs = this.refs;
    if (!refs.phoneNumber.value) {
      alert('Заполните поле телефон');
      return;
    }
    for (let refIndex in refs) {
      if (!refs[refIndex].value
        && refIndex !== 'date'
        && refIndex !== 'time'
        && refIndex !== 'city'
        && refIndex !=='e-mail' && refIndex !=='entrance' ) {
        refs[refIndex].focus();
        alert('Заполните поле ' + refs[refIndex].placeholder);
        return;
      }
    }

    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regExp.test(this.refs['e-mail'].value)) {
      alert('Некорректный адрес электронной почты');
      this.refs['e-mail'].focus();
      return;
    }

    return true;
  };

  getPromoCodes = () => {
    // const url = '/api/promocodes';
    //
    // fetch(url, {
    //   method: 'get',
    // })
    //   .then(response => response.json())
    //   .then(promoCodes => {
    //     this.promoCodes = promoCodes;
    //   });

    this.promoCodes = [{
      value: 'PROMO1',
      sale: '10'
    }]
  };

  componentWillMount() {
    this.getPromoCodes();
    this.setVisible();
  }

 changeData = (date) => {
    this.setState({
      date: date
    });
  };

  addMeter = () => {
    this.setState({
      metersCount: this.state.metersCount +10
    })
  };

  removeMeter = () => {
    if (this.state.metersCount === 100) {
      return;
    } else {
      this.setState({
        metersCount:  this.state.metersCount - 10
      });
    }
  };
  editHoover = (e) => {
    this.setState({
      isHoover: !this.state.isHoover
    });
  };

  changeUserInfo = (event) => {
    this.setState({
      userInfo: {...this.state.userInfo,
        [event.target.name]: event.target.value
      }
    });
  };

  changeAddress = (event) => {
    this.setState({
      address: {...this.state.address,
        [event.target.name]: event.target.value
      }
    });
  };

  changePromoCode = (e) => {
    this.setState({
      promoCode: e.target.value
    })
  };

  applyPromoCode = () => {
    this.promoCodes.map(promocode => {
      if (promocode.value === this.state.promoCode) {
        this.setState({
          sale: promocode.sale,
        })
      }
    })
  };

  timeChange = (selectTIme) => {
    this.setState({
      time: selectTIme.value
    });
  };

  cityChange = (selectCity) => {
    this.setState({
      address: {...this.state.address,
        city: selectCity
      }
    })
  };



  changeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  };

  renderDescription = () => {
    let list;
    moment.lang('ru');
    if (this.state.isSupportive) {
      list = (
        <ul className="calculator__list">
          <li><span  className="calculator__list-element">
            уборка горизонтальных поверхностей от пыли и
            легкоудаляемых загрязнений без проникновений внутрь
            шкафов и на высоте до 2.3 метров
            </span>
          </li>
          <li><span  className="calculator__list-element">
            протирание снаружи кухонной техники
            (чайники, кофемашины и т.д.), кроме вытяжки
            </span>
          </li>
          <li><span  className="calculator__list-element">
           моем лестничные пролеты в доме, протираем перила от пыли
            </span>
          </li>
          <li><span  className="calculator__list-element">
            мытье стеклянных и зеркальных поверхностей, кроме окон
            </span>
          </li>
          <li><span  className="calculator__list-element">
           мытье и дезинфекция сантехники
            </span>
          </li>
          <li><span  className="calculator__list-element">
            уборка пыли с ковров и мягкой мебели
            </span>
          </li>
          <li><span  className="calculator__list-element">
            мытье плинтусов и полов
            </span>
          </li>
          <li><span  className="calculator__list-element">
            вынос бытового мусора
            </span>
          </li>
        </ul>
      );
    } else {
      list = (
        <ul className="calculator__list">
          <li><span  className="calculator__list-element">
            уборка горизонтальных поверхностей от пыли и
            легкоудаляемых загрязнений без проникновений внутрь
            шкафов на и на высоте до 2.3 метров
            </span>
          </li>
          <li><span  className="calculator__list-element">
            уборка всех вертикальных поверхностей
             (фасады мебели, двери, стены в ванной)
             от пыли, пятен жира и известкового налета
             без проникновения внутрь шкафов и техники на
             высоте до 2.3 метров
            </span>
          </li>
          <li><span  className="calculator__list-element">
            протирание снаружи кухонной техники
            (чайники, кофемашины и т.д.), кроме вытяжки
            </span>
          </li>
          <li><span  className="calculator__list-element">
            мытье стеклянных и зеркальных поверхностей, кроме окон
            </span>
          </li>
          <li><span  className="calculator__list-element">
           моем лестничные пролеты в доме, протираем перила от пыли
            </span>
          </li>
          <li><span  className="calculator__list-element">
           мытье и дезинфекция сантехники
            </span>
          </li>
          <li><span  className="calculator__list-element">
            уборка пыли с ковров и мягкой мебели
            </span>
          </li>
          <li><span  className="calculator__list-element">
            мытье плинтусов и полов
            </span>
          </li>
          <li><span  className="calculator__list-element">
            вынос бытового мусора
            </span>
          </li>
        </ul>
      );
    }
    return list;
  };

  renderOptionsList = () => {
    let state = this.state.options;
    let descriptions = [];
    for(let key in state) {
      if (state[key].checked) {
        descriptions.push(state[key].description);
      }
    }
    return (
      <ul className="calculator__order-info-list">
        {
          descriptions.map((item, index) =>
            <li className="calculator__order-info-listItem" key={index}>{item}</li>
          )
        }
      </ul>
    )
  };

  setSupportive = () => {
    this.setState({
      options: {...this.state.options,
        bathtub: {
          count: 0,
          checked: false,
          description: this.state.options.bathtub.description,
          price: this.state.options.bathtub.price,
        },
        drawer: {
          count: 0,
          checked: false,
          description: this.state.options.drawer.description,
          price: this.state.options.drawer.price,
        },
      },
      baseCottagePrice: PRICES.COTTAGE_SUPPORTIVE_PRICE,
      isSupportive: true,
      isComplex: false
    });
  };

  setComplex = () => {
    this.setState({
      options: {...this.state.options,
        bathtub: {
          count: 1,
          checked: true,
          description: this.state.options.bathtub.description,
          price: this.state.options.bathtub.price,
        },
        drawer: {
          count: 1,
          checked: true,
          description: this.state.options.drawer.description,
          price: this.state.options.drawer.price,
        },
      },
      baseCottagePrice: PRICES.COTTAGE_COMPLEX_PRICE,
      isSupportive: false,
      isComplex: true
    });
    return false;
  };

  addItem = (option) => {
    let currentCount = this.state.options[option].count;
    if (option === 'iron') {
      currentCount += 0.5;
    } else {
      currentCount++;
    }
    this.setState({
      options: {...this.state.options,
        [option]: {
          count: currentCount,
          checked: this.state.options[option].checked,
          description: this.state.options[option].description,
          price: this.state.options[option].price
        }
      }
    });
  };

  removeItem = (option) => {
    let currentCount = this.state.options[option].count;

    if (option === 'iron' && currentCount === 0.5) {return;}
    if ( currentCount === 1 && option !== 'iron') {return;}

    if (currentCount !== 0) {
      if (option === 'iron') {
        currentCount -= 0.5;
      } else {
        currentCount--;
      }
    }
    this.setState({
      options: {...this.state.options,
        [option]: {
          count: currentCount,
          checked: this.state.options[option].checked,
          description: this.state.options[option].description,
          price: this.state.options[option].price
        }
      }
    });
  };

  addOption = (option) => {
    let currentCount = this.state.options[option].count;
    if (this.state.options[option].checked) {
      currentCount = 0;
    } else if (currentCount === 0 ) {
      if (option === 'iron') {
        currentCount = 0.5;
      } else {
        currentCount = 1;

      }
    }

    this.setState({
      options:{...this.state.options,
        [option]: {
          count: currentCount,
          checked: !this.state.options[option].checked,
          description: this.state.options[option].description,
          price: this.state.options[option].price
        }
      }
    });

    if (option === 'drawer' || option === 'bathtub') {
      this.checkComplex(option);
    }
  };

  checkComplex = (option) => {
    const drawerIsCheck = this.state.options.drawer.checked;
    const bathtubIsCheck = this.state.options.bathtub.checked;

    switch (option) {
      case 'drawer': if (drawerIsCheck) {
        this.setState({
          isComplex: false,
          isSupportive: true,
          baseCottagePrice: PRICES.COTTAGE_SUPPORTIVE_PRICE,

        })
      } else {
        if (bathtubIsCheck) {
          this.setState({
            isComplex: true,
            isSupportive: false,
            baseCottagePrice: PRICES.COTTAGE_COMPLEX_PRICE,

          })
        }
      }
      case 'bathtub': if (bathtubIsCheck) {
        this.setState({
          isComplex: false,
          isSupportive: true,
          baseCottagePrice: PRICES.COTTAGE_SUPPORTIVE_PRICE,
        })
      } else {
        if (drawerIsCheck) {
          this.setState({
            isComplex: true,
            isSupportive: false,
            baseCottagePrice: PRICES.COTTAGE_COMPLEX_PRICE,
          })
        }
      }
      default: return

    }
  };

  countPrice = () => {
    const { metersCount, baseCottagePrice } = this.state;
    const {window, balcony, cutlery, fridge, oven, microwave, kitchen, iron, chandelier, tray, drawer, bathtub} = this.state.options
    let price = 0;
    price += metersCount * baseCottagePrice
      + window.count*PRICES.WINDOW_PRICE
      + balcony.count*PRICES.BALCONY_PRICE
      + cutlery.count*PRICES.DISHES_PRICE
      + fridge.count*PRICES.FRIDGE_PRICE
      + oven.count*PRICES.OVEN_PRICE
      + microwave.count*PRICES.MICROWAVE_PRICE
      + kitchen.count*PRICES.KITCHEN_PRICE
      + iron.count*PRICES.IRONING_PRICE
      + chandelier.count*PRICES.CHANDELIER_PRICE
      + tray.count*PRICES.TRAY_PRICE
    if (this.state.isHoover) price-=2;
    this.price = price;
    return this.price;
  };

  countTime = () => {
    const {window, balcony, cutlery, fridge, oven, microwave, kitchen, iron, chandelier, tray, drawer, bathtub} = this.state.options;
    let time = 0;
    time += TIMES.BASE_TIME
      + window.count*TIMES.WINDOW_TIME
      + balcony.count*TIMES.BALCONY_TIME
      + cutlery.count*TIMES.DISHES_TIME
      + fridge.count*TIMES.FRIDGE_TIME
      + oven.count*TIMES.OVEN_TIME
      + microwave.count*TIMES.MICROWAVE_TIME
      + kitchen.count*TIMES.KITCHEN_TIME
      + iron.count*TIMES.IRONING_TIME
      + chandelier.count*TIMES.CHANDELIER_TIME
      + tray.count*TIMES.TRAY_TIME
    return time + ' ч.'
  };

  setVisible = () => {
    setTimeout(() => {
      this.setState({visible: true});
    }, 1000);
  };

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {

    var options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return (
      <div >
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <div id='calculator-header' className="calculator__top-header">
            <Header logo={logo} specClass={'header__calculator'}/>
            <div className="calculator__top-title">
              Оформление заказа
            </div>
          </div>
          {/*<div className="scroll-block" ref="scroll" >*/}
          {/*<div className="scroll-block__text-container">*/}
          {/*<span className="scroll-block__text" >К оплате</span>*/}
          {/*<span className="scroll-block__text scroll-block__text--blue">{this.countPrice()}</span>*/}
          {/*</div>*/}
          {/*<div className="scroll-block__button">*/}
          {/*Заказать уборку*/}
          {/*</div>*/}
          {/*</div>*/}

          <div className="calculator">
            <div className="calculator__order-form">
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Параметры квартиры</span>
                </div>
                <div className="calculator__parameters-line">
                  <div className="calculator__parameter">
                    <div onClick={this.removeMeter} className="calculator__parameter-text">
                      <span>-</span>
                    </div>
                    <div className="calculator__parameter-text--center">{this.state.metersCount + ' кв. м'}</div>
                    <div onClick={this.addMeter} className="calculator__parameter-text">
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Дата и время</span>
                </div>
                <div className="calculator__parameters-line">
                  <div className="calculator__datePicker-container calculator__parameter ">
                    <DatePicker selected={this.state.date}
                                locale="ru-ru"
                                minDate={moment().locale('ru')}
                                placeholderText="Выберите дату"
                                readOnly={true}
                                onChange={this.changeData}
                                ref="date"
                                className={'calculator__input--date'}/>
                  </div>
                  <Select name="Время уборки"
                          value={this.state.time}
                          placeholder="Время уборки"
                          options={this.state.times}
                          clearable={false}
                          ref="time"
                          disabled={!this.state.date}
                          searchable={false}
                          className="calculator__parameter"
                          autosize={false}
                          onChange={this.timeChange}/>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Основная уборка</span>
                </div>
                <div className="calculator__button-container">
                  <div onClick={this.setSupportive} className={this.state.isSupportive ? 'calculator__button calculator__button--active' : 'calculator__button'}>поддерживающая</div>
                  <div onClick={this.setComplex} className={this.state.isComplex ? 'calculator__button calculator__button--active' : 'calculator__button'}>комплексная</div>
                </div>
                <div className="calculator__description">
                  {this.renderDescription()}
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Дополнительные опции</span>
                </div>
                <div className="calculator__option-container">
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'window')}
                         className={this.state.options.window.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.window.checked ? windowActiveImage : windowImage} alt="Окна"/>
                      </div>
                      <span className={this.state.options.window.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Окна</span>
                    </div>
                    <div className={this.state.options.window.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'window')} className="calculator__counter-left"><span>-</span></div>
                      <div className="calculator__counter-middle">{this.state.options.window.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'window')}  className="calculator__counter-right"><span>+</span></div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'balcony')}
                         className={this.state.options.balcony.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.balcony.checked ? balconyActive : balcony} alt="Балконы"/>
                      </div>
                      <span className={this.state.options.balcony.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Балкон</span>
                    </div>
                    <div className={this.state.options.balcony.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'balcony')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.balcony.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'balcony')}  className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'cutlery')}
                         className={this.state.options.cutlery.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.cutlery.checked ? cutleryActive : cutlery} alt="Посуда"/>
                      </div>
                      <span className={this.state.options.cutlery.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Посуда</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'fridge')}
                         className={this.state.options.fridge.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.fridge.checked ? fridgeActive : fridge} alt="Холодильник"/>
                      </div>
                      <span className={this.state.options.fridge.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Холодильник</span>
                    </div>
                    <div className={this.state.options.fridge.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'fridge')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.fridge.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'fridge')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'chandelier')}
                         className={this.state.options.chandelier.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.chandelier.checked ? chandelierActive : chandelier} alt="Люстры"/>
                      </div>
                      <span className={this.state.options.chandelier.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Люстры</span>
                    </div>
                    <div className={this.state.options.chandelier.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'chandelier')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.chandelier.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'chandelier')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'microwave')}
                         className={this.state.options.microwave.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.microwave.checked ? microwaveActive : microwave} alt="Микроволновка"/>
                      </div>
                      <span className={this.state.options.microwave.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Микроволновка</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'kitchen')}
                         className={this.state.options.kitchen.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.kitchen.checked ? kitchenActive : kitchen} alt="Внутри кухонных шкафов"/>
                      </div>
                      <span className={this.state.options.kitchen.checked ? "calculator__label-text calculator__label-text--white calculator__label-text--largeIcon" : "calculator__label-text calculator__label-text--largeIcon"}>Внутри кухонных шкафов</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'iron')}
                         className={this.state.options.iron.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.iron.checked ? ironActive : iron} alt="Глажка"/>
                      </div>
                      <span className={this.state.options.iron.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Глажка</span>
                    </div>
                    <div className={this.state.options.iron.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'iron')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.iron.count} ч.</div>
                      <div onClick={this.addItem.bind(this, 'iron')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'oven')}
                         className={this.state.options.oven.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.oven.checked ? ovenActive : oven} alt="Духовка"/>
                      </div>
                      <span className={this.state.options.oven.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Духовка</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'tray')}
                         className={this.state.options.tray.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.tray.checked ? trayActive : tray} alt="Лоток питомца"/>
                      </div>
                      <span className={this.state.options.tray.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Лоток питомца</span>
                    </div>
                    <div className={this.state.options.tray.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'tray')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.tray.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'tray')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'drawer')}
                         className={this.state.options.drawer.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.drawer.checked ? drawerActive : drawer} alt="Фасады мебели"/>
                      </div>
                      <span className={this.state.options.drawer.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Фасады мебели</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'bathtub')}
                         className={this.state.options.bathtub.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.bathtub.checked ? bathtubActive : bathtub} alt="Стены в ванной"/>
                      </div>
                      <span className={this.state.options.bathtub.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Стены в ванной</span>
                    </div>
                  </div>
                </div>
                <div className="calculator__hoover">
                  <input className="calculator__hoover-input"
                         checked={this.state.isHoover}
                         type="checkbox"
                         onChange={this.editHoover}
                         id='hoover'
                  />
                  <label  className="calculator__hoover-label" htmlFor="hoover">у меня есть пылесос</label>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Адрес</span>
                </div>
                <div className="calculator__address">
                  <div className="calculator__address-container">
                    <Select name="Город"
                            value={this.state.address.city}
                            placeholder="Город"
                            options={this.state.cities}
                            clearable={false}
                            ref="city"
                            searchable={false}
                            className="calculator__input--visible"
                            autosize={false}
                            onChange={this.cityChange}/>
                    <div className="calculator__input-container">
                      <input type="text" maxLength="4" ref='home' onChange={this.changeAddress} name="home" placeholder="Дом" className="calculator__input--short"/>
                      <input type="text" maxLength="3" onChange={this.changeAddress} name="housing" placeholder="Корпус" className="calculator__input--short"/>
                    </div>
                  </div>
                  <div className="calculator__address-container">
                    <input type="text" ref="street" maxLength="15" onChange={this.changeAddress} name="street" placeholder="Улица" className="calculator__input--long"/>
                    <div className="calculator__input-container">
                      <input type="tel" ref="flat" maxLength="4" onChange={this.changeAddress} name="flat" placeholder="Квартира" className="calculator__input--short"/>
                      <input type="tel" ref="entrance" maxLength="1" onChange={this.changeAddress} name="entrance" placeholder="Подъезд" className="calculator__input--short"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Контактная информация</span>
                </div>
                <div className="calculator__userInfo">
                  <div className="calculator__userInfo-container">
                    <input type="text"
                           ref="name"
                           onChange={this.changeUserInfo}
                           name="name"
                           placeholder="Имя"
                           className="calculator__input--long"/>
                    <input type="text"
                           ref="lastName"
                           onChange={this.changeUserInfo}
                           name="lastName"
                           placeholder="Фамилия"
                           className="calculator__input--long"/>
                  </div>
                  <div className="calculator__userInfo-container">
                    <InputMask type="tel"
                               ref="phoneNumber"
                               onChange={this.changeUserInfo}
                               name="phoneNumber"
                               placeholder="Телефон"
                               className="calculator__input--long"
                               maskChar=" "
                               mask="+375999999999"
                    />
                    <input type="email"  ref="e-mail" onChange={this.changeUserInfo} name="e-mail" placeholder="e-mail" className="calculator__input--long"/>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Комментарий</span>
                </div>
                <div className="calculator__comment-container">
                  <textarea className="calculator__textArea" onChange={this.changeComment} name=""/>
                </div>
              </div>
            </div>
            <OrderInfo options={this.state.options}
                       bathroomCount={this.state.bathroomCount}
                       timeСlean={this.countTime()}
                       time={this.state.time}
                       date={this.state.date}
                       price={this.countPrice()}
                       changePromoCode={this.changePromoCode}
                       applyPromoCode={this.applyPromoCode}
                       createOrder={this.createOrder}
                       sale={this.state.sale}
                       metersCount={this.state.metersCount}
                       isCottage={true}
                       isSupportive={this.state.isSupportive}
                       roomCount={this.state.roomCount}/>
          </div>
          <Footer logo={logo}/>
        </div>
      </div>
    );
  }
}

export default CalculatorCottage;

