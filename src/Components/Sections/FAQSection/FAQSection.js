import React, { Component } from 'react';
import './FAQSection.css';
import { Tabbordion , TabPanel, TabLabel, TabContent } from 'react-tabbordion'

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


class FAQSection extends Component {
  render() {
    return (
      <section className="faq-section">
        <div className="faq-section__inner-container">
          <h3 className="faq-section__title">Вопросы и ответы</h3>
          <Tabbordion  blockElements={blockElements}
                      className="accordion"
                      animateContent="height"
                      name="tabs"
                      mode="toggle"
                      bemModifiers={bemModifiers}
                      component="ul">
            <TabPanel>
              <TabLabel>Нужно ли быть дома во время уборки от Звыш?</TabLabel>
              <TabContent>
                <p>Наши пользователи чаще всего остаются дома,
                  когда заказывают уборку от Звыш впервые.
                  Но уже в следующий раз они с легкостью оставляют
                  домработницу одну, чтобы заняться своими делами.
                  Более того, домработница с радостью доставит ключи в любое место в черте города.
                </p>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabLabel>Я заказал(-а) уборку. Кто приедет ко мне убираться?</TabLabel>
              <TabContent>
                <p>Все домработницы из команды Звыш прошли тщательный отбор.
                  Мы обучили их всем тонкостям профессиональной уборки
                  и провели комплексное тестирование. Кроме того,
                  попросили предоставить справку об отсутствии судимости.
                  В зависимости от величины заказа мы направим к Вам одну,
                  две или три профессиональные домработницы. В день уборки
                  мы пришлём смс с именами домработниц, которые приедут к
                  Вам со всем необходимым. Отдыхайте и наслаждайтесь чистотой!
                </p>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabLabel>Будет ли у домработницы всё необходимое для уборки?</TabLabel>
              <TabContent>
                <p>Да, наши домработницы привезут с собой весь инвентарь
                  и профессиональную косметику для уборки квартиры. Даже пылесос.
                  Но если у Вас есть свой пылесос и Вы не против, чтобы мы им воспользовались,
                  сообщите нам. При заказе на сайте поставьте галочку в графе “у меня есть пылесос”
                  и мы подарим Вам приятный бонус.

                </p>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabLabel>Делаете ли вы уборку после ремонта? Химчистку ковров и мебели? Моете ли потолок?</TabLabel>
              <TabContent>
                <p>
                  К сожалению, сейчас мы не можем по-настоящему
                  качественно убирать после ремонта, делать химчистку
                  ковров и мебели, а также выводить трудные пятна и
                  мыть потолки. Поэтому, такие услуги мы пока не
                  оказываем. Но активно ищем решение и скоро порадуем Вас.
                </p>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabLabel>Сотрудничаете ли вы с юрлицами? Убираете ли вы офисы?</TabLabel>
              <TabContent>
                <p>
                  На данный момент мы решили сконцентрироваться
                  на уборке квартир и коттеджей. Для уборки
                  офисных помещений необходимо специальное оборудование.
                  Но мы стремимся сотрудничать и решать задачи юрлиц.
                  И потому будем начинать с малого: если ваше помещение небольшое,
                  то вы можете связаться с нами по номеру +375 (33) 389-13-76, и мы постараемся вам помочь.
                </p>
              </TabContent>
            </TabPanel>
          </Tabbordion>
        </div>
      </section>
    );
  }
}

export default FAQSection;
