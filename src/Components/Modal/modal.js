import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './modal.css';

import oven from '../../images/oven.png';

import fridge from '../../images/fridge.png';

import windowImage from '../../images/window.png';

import balcony from '../../images/balcony.png';

import cutlery from '../../images/cutlery.png';

import microwave from '../../images/microwave.png';

import kitchen from '../../images/kitchen.png'

import iron from '../../images/iron.png'

import chandelier from '../../images/chandelier.png'

import tray from '../../images/tray.png'

import drawer from '../../images/drawer.png'

import bathtub from '../../images/bathtub.png'

import close from '../../images/close.png';

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__inner-container">
          <div onClick={this.props.closeModal} className="modal__close-button">
            <img className="modal__close-button-image " src={close} alt=""/>
          </div>
          <div className="modal__title">Что входит в уборку</div>
          <div className="modal__lists-container">
              <div className="modal__list-container">
                <div className="modal__list__title">В жилых комнатах</div>
                <ul className="modal__list">
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Чистим зеркала и стеклянные поверхности
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Пылесосим ковёр, моем пол и протираем плинтусы
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Складываем одежду и расставляем вещи
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Застилаем кровать
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Выносим мусор
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal__list-container">
                <div className="modal__list__title">На кухне</div>
                <ul className="modal__list">
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Протираем снаружи холодильник и другую технику
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Моем плиту
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Моем раковину и столешницу
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Моем пол и протираем плинтусы
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Выносим мусор
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal__list-container">
                <div className="modal__list__title">В ванной и туалете</div>
                <ul className="modal__list">
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Моем ванную/душевую кабину
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Чистим зеркала и стеклянные поверхности
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Моем пол, протираем плинтусы и пылесосим коврики
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                    Моем и дезинфицируем унитаз
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Протираем шкафы с внешней стороны
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Выносим мусор
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal__list-container">
                <div className="modal__list__title">В коридоре</div>
                <ul className="modal__list">
                  <li className="modal__list-element">
                    <span className="modal__text">
                      Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Чистим стеклянные поверхности и зеркала
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Моем пол, протираем плинтусы и пылесосим коврики
                    </span>
                  </li>
                  <li className="modal__list-element">
                    <span className="modal__text">
                     Расставляем обувь
                    </span>
                  </li>
                </ul>
              </div>
          </div>
          <div className="modal__title">Дополнительные услуги</div>
            <div className="modal_options-container">
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={fridge} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Чистка холодильника</div>
                    <div className="modal__text">Освободим полки, удалим загрязнения и выбросим мусор, только заранее отключите морозилку</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={oven} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Мытье духового шкафа</div>
                    <div className="modal__text">Удалим жир и загрязнения изнутри, очистим и протрём духовой шкаф</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={microwave} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Мытье микроволновки</div>
                    <div className="modal__text">Удалим жир и загрязнения изнутри, очистим поддон, протрём микроволновую печь</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={windowImage} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Мытье окон</div>
                    <div className="modal__text">Вымоем раму и окно с внутренней стороны, а в тёплое время года ещё и с наружной</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={cutlery} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Мытье посуды</div>
                    <div className="modal__text">Помоем грязную посуду и расставим её по местам</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={balcony} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Уборка балкона</div>
                    <div className="modal__text">Протрём все доступные поверхности, помоем пол, расставим нетяжёлые предметы</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={kitchen} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Уборка кухоннных шкафов</div>
                    <div className="modal__text">Освободим полки, протрём все поверхности изнутри и поставим всё обратно</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={iron} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Глажка</div>
                    <div className="modal__text">Тщательно выгладим ваше белье и одежду. Оставьте их рядом с гладильной доской</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={chandelier} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Чистка люстр</div>
                    <div className="modal__text">Протрём пыль со светильника, главное, подготовьте стремянку для клинера</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={tray} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Помыть лоток питомца</div>
                    <div className="modal__text">Выбросим старый наполнитель, помоем лоток и вокруг него, насыпем свежий наполнитель</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={drawer} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Уборка стен в ванной</div>
                    <div className="modal__text">Вымоем стены и избавимся от небольших налетов на них</div>
                  </div>
                </div>
              </div>
              <div className="modal__option-container">
                <div className="modal__option">
                  <div className="modal__option-image-container">
                    <img className="modal__option-image" src={bathtub} alt=""/>
                  </div>
                  <div className="modal__option__description-container">
                    <div className="modal__option__title">Уборка фасадов мебели</div>
                    <div className="modal__text">Протрем все вертикальные поверхности вашей мебели</div>
                  </div>
                </div>
              </div>
            </div>
          <div className="modal__order-button-container">
            <NavLink to="/order/flat">
            <div className="modal__order__button">Заказать уборку от 28р.</div>
            </NavLink>
          </div>
          <div className="modal__title">Что не входит в уборку</div>
          <div className="modal__lists-container">
            <div className="modal__list-container">
              <ul className="modal__list">
                <li className="modal__list-element">
                    <span className="modal__text">
                      Не поднимаем и не двигаем тяжёлые предеметы и мебель
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                      Не делаем химическую чистку ковров
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                      Не чистим жалюзи и шторы
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                     Не прибираем в калдовке
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                      Застилаем кровать
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                      Выносим мусор
                    </span>
                </li>
              </ul>
            </div>
            <div className="modal__list-container">
              <ul className="modal__list">
                <li className="modal__list-element">
                    <span className="modal__text">
                      Не применяем биологически опасные материалы
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                     Не работаем во дворах и огородах
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                      Не удаляем паром и не выводим глубокие пятна
                    </span>
                </li>
                <li className="modal__list-element">
                    <span className="modal__text">
                     Не убираем на лестничных проемах и в общих коридорах
                    </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Modal;
