import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DescriptionSection.css';
import 'react-tabs/style/react-tabs.css';

import room from '../../../images/room.jpg';

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
                <div className="description-section__main-image-container">
                  <div className="description-section__main-image-wrapper">
                   <div className="description-section__main-image description-section__main-image--room">
                   </div>
                  </div>
                </div>
                <div className="description-section__item-container">
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__main-image-container">
                  <div className="description-section__main-image-wrapper">
                    <div className="description-section__main-image description-section__main-image--kitchen">
                    </div>
                  </div>
                </div>
                <div className="description-section__item-container">
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__main-image">

                </div>
                <div className="description-section__item-container">
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__main-image-container">
                  <div className="description-section__main-image-wrapper">
                    <div className="description-section__main-image description-section__main-image--hall">
                    </div>
                  </div>
                </div>
                <div className="description-section__item-container">
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image-container"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default DescriptionSection;
