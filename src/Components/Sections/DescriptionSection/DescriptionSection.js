import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DescriptionSection.css';
import 'react-tabs/style/react-tabs.css';

import room from '../../../images/room.jpg';

import roomMirrow from '../../../images/room-mirrow.png';
import roomDust from '../../../images/roomDust.png';
import roomBed from '../../../images/roomBed.png';
import roomHoover from '../../../images/roomHoover.png';
import roomClothes from '../../../images/roomClothes.png';
import roomGarbage from '../../../images/roomGarbage.png';


import kitchenCook from '../../../images/kitchenCook.png';
import kitchenGarbage from '../../../images/kitchenGarbage.png';
import kitchenFloor from '../../../images/kitchenFloor.png';
import kitchenSink from '../../../images/kitchenSink.png';
import kitchenDrawer from '../../../images/kitchenDrawer.png';
import kitchenFridge from '../../../images/kitchenFridge.png';

import hallFloor from '../../../images/hallFloor.png';
import hallDoor from '../../../images/hallDoor.png';
import hallBoots from '../../../images/hallBoots.png';
import hallGlass from '../../../images/hallGlass.png';



class DescriptionSection extends Component {
  render() {
    return (
      <section className="description-section">
        <div className="description-section__inner-container">
          <h3 className="page__block-title">Что входит в уборку Звыш</h3>
          <Tabs>
            <TabList>
              <Tab>Комната</Tab>
              <Tab>Кухня</Tab>
              <Tab>Ванная</Tab>
              <Tab>Коридор</Tab>
            </TabList>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__option-container">
                  <div className="description-section__main-image-container">
                    <div className="description-section__main-image-wrapper">
                      <div className="description-section__main-image description-section__main-image--room">
                      </div>
                    </div>
                  </div>
                  <div className="description-section__item-container">
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img src={roomDust} alt="" className="description-section__image"/>
                      </div>
                      <div className="description-section__text">Протираем все доступные горизонтальные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img src={roomClothes} alt="" className="description-section__image"/>
                      </div>
                      <div className="description-section__text">Складываем одежду и расставляем предметы</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={roomMirrow} alt=""/>
                      </div>
                      <div className="description-section__text">Чистим зеркала и стеклянные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img src={roomBed} alt="" className="description-section__image"/>
                      </div>
                      <div className="description-section__text">Застилаем кровать</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img src={roomHoover} alt="" className="description-section__image"/>
                      </div>
                      <div className="description-section__text">Пылесосим ковёр, моем пол и протираем плинтусы</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img src={roomGarbage} alt="" className="description-section__image"/>
                      </div>
                      <div className="description-section__text">Выносим мусор</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__option-container">
                  <div className="description-section__main-image-container">
                    <div className="description-section__main-image-wrapper">
                      <div className="description-section__main-image description-section__main-image--kitchen">
                      </div>
                    </div>
                  </div>
                  <div className="description-section__item-container">
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenDrawer} alt=""/>
                      </div>
                      <div className="description-section__text">Протираем все доступные горизонтальные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenFridge} alt=""/>
                      </div>
                      <div className="description-section__text">Протираем снаружи холодильник и другую технику</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenCook} alt=""/>
                      </div>
                      <div className="description-section__text">Моем варочную поверхность</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenSink} alt=""/>
                      </div>
                      <div className="description-section__text">Моем раковину и столешницу</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenFloor} alt=""/>
                      </div>
                      <div className="description-section__text">Моем пол и протираем плинтусы</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenGarbage} alt=""/>
                      </div>
                      <div className="description-section__text">Выносим мусор</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__option-container">
                  <div className="description-section__main-image-container">
                    <div className="description-section__main-image-wrapper">
                      <div className="description-section__main-image description-section__main-image--kitchen">
                      </div>
                    </div>
                  </div>
                  <div className="description-section__item-container">
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenDrawer} alt=""/>
                      </div>
                      <div className="description-section__text">Протираем все доступные горизонтальные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenFridge} alt=""/>
                      </div>
                      <div className="description-section__text">Моем душевую кабину и ванную</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenCook} alt=""/>
                      </div>
                      <div className="description-section__text">Чистим зеркала и зеркальные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenSink} alt=""/>
                      </div>
                      <div className="description-section__text">Моем пол и протираем плинтусы и пылесосим коврики</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenFloor} alt=""/>
                      </div>
                      <div className="description-section__text">Моем пол и протираем плинтусы</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={kitchenGarbage} alt=""/>
                      </div>
                      <div className="description-section__text">Выносим мусор</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__option-container">
                  <div className="description-section__main-image-container">
                    <div className="description-section__main-image-wrapper">
                      <div className="description-section__main-image description-section__main-image--hall">
                      </div>
                    </div>
                  </div>
                  <div className="description-section__item-container">
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={hallDoor} alt=""/>
                      </div>
                      <div className="description-section__text">Протираем все доступные поверхности</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={hallGlass} alt=""/>
                      </div>
                      <div className="description-section__text">Чистим стеклянные поверхности и зеркала</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={hallBoots} alt=""/>
                      </div>
                      <div className="description-section__text">Расставляем обувь</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" src={hallFloor} alt=""/>
                      </div>
                      <div className="description-section__text">Моем пол и протираем плинтусы</div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" alt=""/>
                      </div>
                      <div className="description-section__text"></div>
                    </div>
                    <div className="description-section__item">
                      <div className="description-section__image-container">
                        <img className="description-section__image" alt=""/>
                      </div>
                      <div className="description-section__text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <div className="description-section__button-inner-container">
            <div className="description-section__button-container">
                <div onClick={this.props.openModal} className="description-section__button">Полный список</div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default DescriptionSection;
