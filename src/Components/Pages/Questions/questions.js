import React, { Component } from 'react';
import './questions.css';
import {CircleLoader} from 'react-spinners';
import logo from '../../../images/main_logo_colorfull.png';
import { Tabbordion , TabPanel, TabLabel, TabContent } from 'react-tabbordion'

import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';

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


class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentTab: 1
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillMount() {
    this.setVisible();
  }

  setVisible = () => {
    setTimeout(() => {
      this.setState({visible: true});
    }, 1000);
  };

  changeTab = (currentTab) => {
    this.setState({
      currentTab
    })
  };


  renderFirstTabQuestions = () => (
    <Tabbordion  blockElements={blockElements}
                 className="accordion"
                 animateContent="height"
                 name="tabs"
                 mode="toggle"
                 bemModifiers={bemModifiers}
                 component="ul">
      <TabPanel>
        <TabLabel> Что входит в поддерживающую уборку?</TabLabel>
        <TabContent>
          <p className="question__paragraph">
            Мы выработали высокие стандарты уборки, которым следует каждая домработница. Существует строгий алгоритм действий, определяющий что и в какой последовательности делать.
          </p>
          <p className="question__paragraph">
            Вот то, что входит в стандартный список уборки:
          </p>

          <p className="question__list-title">
            В жилых комнатах:
          </p>
          <ul className="question__list">
            <li className="question__list-element">Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки;
            </li>
            <li className="question__list-element">Чистим зеркала и стеклянные поверхности;
            </li>
            <li className="question__list-element">Пылесосим ковёр, моем пол и протираем плинтусы;
            </li>
            <li className="question__list-element">Складываем одежду и расставляем вещи;
            </li>
            <li className="question__list-element">Застилаем кровать;
            </li>
            <li className="question__list-element">Выносим мусор.
            </li>
          </ul>
          <p className="question__list-title">
            На кухне:
          </p>
          <ul className="question__list">
            <li className="question__list-element">Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки;
            </li>
            <li className="question__list-element">Протираем снаружи холодильник и другую технику;
            </li>
            <li className="question__list-element">Моем плиту, раковину и столешницу;
            </li>
            <li className="question__list-element">Моем пол и протираем плинтусы;
            </li>
            <li className="question__list-element">Застилаем кровать;
            </li>
            <li className="question__list-element">Выносим мусор.
            </li>
          </ul>
          <p className="question__list-title">
            В ванной и туалете:
          </p>
          <ul className="question__list">
            <li className="question__list-element">Протираем все доступные горизонтальные поверхности, выключатели и дверные ручки;
            </li>
            <li className="question__list-element">Моем ванную/душевую кабину;
            </li>
            <li className="question__list-element">Чистим зеркала и стеклянные поверхности;
            </li>
            <li className="question__list-element">Моем пол, протираем плинтусы и пылесосим коврики;
            </li>
            <li className="question__list-element">Моем и дезинфицируем унитаз;
            </li>
            <li className="question__list-element">Протираем шкафы с внешней стороны;
            </li>
            <li className="question__list-element">Выносим мусор.
            </li>
          </ul>
          <p className="question__list-title">
            В коридоре:
          </p>
          <ul className="question__list">
            <li className="question__list-element">Протираем все доступные горизонтальные поверхности;
            </li>
            <li className="question__list-element">Чистим стеклянные поверхности и зеркала;
            </li>
            <li className="question__list-element">Моем пол, протираем плинтусы и пылесосим коврики;
            </li>
            <li className="question__list-element">Расставляем обувь.
            </li>
          </ul>
          <p className="question__list-title">
            Дополнительные услуги:
          </p>
          <ul className="question__list">
            <li className="question__list-element">Чистка холодильника</li>
            <li className="question__list-element">Мытье духового шкафа</li>
            <li className="question__list-element">Мытье микроволновки</li>
            <li className="question__list-element">Мытье окон</li>
            <li className="question__list-element">Мытье посуды</li>
            <li className="question__list-element">Уборка балкона</li>
            <li className="question__list-element">Доставка ключей</li>
            <li className="question__list-element">Уборка внутри кухонных шкафов</li>
            <li className="question__list-element">Глажка</li>
            <li className="question__list-element">Чистка люстр</li>
            <li className="question__list-element">Помыть лоток питомца</li>
            <li className="question__list-element">Уборка стен в ванной</li>
            <li className="question__list-element">Уборка фасадов мебели.</li>
          </ul>
          <p className="question__text">Мы с удовольствием сделаем это, если вы выберете одну из дополнительных опций.</p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Чем отличается комплексная уборка от поддерживающей?</TabLabel>
          <TabContent>
            <p className="questions__answer">
              Комплексная включает в себя поддерживающую уборку. Плюс ко всему, мы сделаем уборку вертикальных поверхностях: стены в ванной и туалете, стены над варочной поверхностью, фасады мебели, двери. Если вы хотите заказать уборку у нас впервые, то мы рекомендуем начинать с комплексной, чтобы домработницы навели полную чистоту, а затем время от времени ее поддерживали.
            </p>
          </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Нужно ли быть дома во время уборки от Звыш?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Наши пользователи чаще всего остаются дома, когда заказывают уборку от Звыш впервые. Но уже в следующий раз они с легкостью оставляют домработницу одну, чтобы заняться своими делами. Более того, домработница с радостью доставит ключи в любое место в черте города.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Будем ли мы подписывать какие-либо документы перед уборкой?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Цель сервиса по уборке Звыш - сделать процесс заказа максимально доступным и простым, как для вас, так и для нас. Мы стремились избавиться от ненужной бумажной волокиты, при этом не потерять в целостности и законности нашего с вами взаимодействия. Потому нами была разработана система. Единственное, что вам нужно будет сделать, это после уборки расписаться в документе, который предоставит домработница. Разумеется, только если результат вам нравится. Если же остались недочеты, домработница все доработает. И к тому же бесплатно!
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Будет ли у домработницы всё необходимое для уборки?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Да, наши домработницы привезут с собой весь инвентарь и профессиональную косметику для уборки квартиры. Даже пылесос. Но если у вас есть свой пылесос и вы не против, чтобы мы им воспользовались, сообщите нам. При заказе на сайте поставьте галочку в графе “у меня есть пылесос” и мы подарим вам приятный бонус.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Делаете ли вы уборку после ремонта? Химчистку ковров и мебели? Моете ли потолок?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            К сожалению, сейчас мы не можем по-настоящему качественно убирать после ремонта, делать химчистку ковров и мебели, а также выводить трудные пятна и мыть потолки. Поэтому, такие услуги мы пока не оказываем. Но активно ищем решение и скоро порадуем вас.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>А что если в доме что-нибудь пропадет или домработница что-то сломает?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Самое главное - не волноваться. Мы уверены в наших исполнителях. Они прошли два строгих этапа отбора и практическое и теоретическое обучение, предоставили справку об отсутствии судимости. Но если что-то пойдет не так, мы готовы возместить нанесенный ущерб. К тому же, у нас есть вся необходимая информация, о домработницах. Потому установить истину будет не трудно.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Смогу ли я заказывать понравившуюся мне домработницу?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Конечно! Для этого сообщите нам в комментариях свои пожелания или свяжитесь по телефону. Только сделайте это не позднее, чем за 5 дней до уборки, чтобы мы могли предоставить ваш заказ именно той, кому вы желаете. Если вдруг эта домработница заболеет, не переживайте, мы найдем для вас другую или вместе с вами поменяем дату и время уборки.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Вы сможете помыть мне потолки, жалюзи, верхние части стен и прочие штуки, до которых сложно дотянуться?
        </TabLabel>
        <TabContent>
          <p className="questions__answer">
            Домработница работает на высоте до 2.3 м. Но если вы предоставите стремянку или лестницу, то она с удовольствием вымоет все доступные горизонтальные и вертикальные поверхности. Жалюзи, потолки и стены мы не моем. Для этого необходимы специальные инструменты, которые никак не поместятся в компактный портфель домработницы.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>В моем доме разбросаны вещи. Вы сможете их собрать и разложить?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Да, только нужны ваши указания. Без них домработница не сможет притрагиваться к вашим личным вещам, даже если они валяются повсюду. В комментариях к заказу напишите ваши пожелания или при встрече укажите домработнице на вещи, которые необходимо сложить. Мы сделаем все, что сможем, чтобы вам помочь.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Сможете убрать люстру?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Да, мы уберем. Наши домработницы чего только не умеют, и люстры убирать тоже. Готовьте стремянку или лестницу - все будет чисто.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Моете ли вы внутри кухонной техники: в холодильнике, микроволновке, духовом шкафу?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Да, мы сможем это сделать. Все что вам необходимо, это указать дополнительную услугу при оформлении заказа.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Убираете ли вы балкон?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Конечно! При оформлении заказа выберите дополнительную услугу “Уборка балкона”, и домработница наведет там порядок. (Остекление не учитывается. Уборку окон в том числе и на балконе можете  добавить при оформлении заказа)
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Мне нужно, чтобы вы отодвинули мебель, убрали за ней, а после поставили все на место. Сможете?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            К сожалению, нет. Без специальных штук домработница может повредить поверхность вашего пола, да и к тому же ей будет очень тяжело это сделать. А мы не хотим, чтобы она травмировалась. Но если вы ей поможете и переставите во время уборки мебель, то она с удовольствием уберет в этих местах.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Почему в квартирах вы считаете количество комнат и санузлов, а в коттеджах - квадратные метры?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Дело в том, что средние коттеджи, как правило, намного больше средних квартир. Мы провели тщательный анализ. Соотнесли физические затраты домработниц и время, которые необходимы для уборки разных по площадям домов. После этого мы пришли к выводу, что справедливо будет такая калькуляция: в квартирах - комнаты и санузлы, а в коттеджах - квадратные метры.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>А что мне указывать, если у меня гостиная объединена с кухней?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Указывайте отдельно кухню и отдельно гостинную.Уборка кухни отличается от уборки комнаты, ведь это два разных комплекса работ, пусть между помещениями и нет стены. Домработницы даже используют определенные салфетки для каждого вида помещений.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>У меня отдельный туалет и ванная комната. Какое количество санузлов указывать при заказе?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            За санузел мы считаем количество комнат, в которых находится ванная или душевая кабина. Поэтому в случае, если у вас раздельный санузел: отдельный туалет и ванная комната, то в заказе указывайте один санузел.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>У меня есть домашние животные. Уберете лоток?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Мы с удовольствием наведем чистоту и порядок для ваших питомцев. Просто при оформлении заказа добавьте дополнительную услугу “Уборка лотка” и выберете необходимое количество. Мы избавимся от старого наполнителя, вымоем лоток и пространство рядом с ним и по вашему желанию добавим новый наполнитель.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Сотрудничаете ли вы с юрлицами? Убираете ли вы офисы?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            На данный момент мы решили сконцентрироваться на уборке квартир и коттеджей. Потому не сможем обеспечить качественной уборкой большое помещение офиса или торгового центра. Но мы стремимся сотрудничать и решать задачи юрлиц. И потому будем начинать с малого: если ваше помещение небольшое, то вы можете связаться с нами по номеру +375 (33) 389-13-76, и мы постараемся вам помочь.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Убираете ли вы придомовую территорию коттеджа? Производите ли вы работу в огородах?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            К сожалению, на данный момент мы не оказываем услуги по уборке двора вашего коттеджа. Также, как и не работаем в огородах.  Для этого нужны специальные штуки, которые не поместятся в компактный портфель домработницы. Мы очень заботимся об их здоровье, потому не можем нагрузить всем-всем. Но мы ищем решение этого вопроса и сразу же дадим вам знать, когда оно появится.
          </p>
        </TabContent>
      </TabPanel>
    </Tabbordion>
  );

  renderSecondTabQuestions = () => (
    <Tabbordion  blockElements={blockElements}
                 className="accordion"
                 animateContent="height"
                 name="tabs"
                 mode="toggle"
                 bemModifiers={bemModifiers}
                 component="ul">
      <TabPanel>
        <TabLabel>Как изменить или отменить уборку?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Все очень просто. Просто позвоните нам по телефону +375 (33) 3891376
            хоть за пару минут до начала уборки и мы отменим или перенесем ваш заказ. Правда, мы будем очень благодарны, если вы сделаете это заранее. Дело в, что домработница планирует свой день и будет не очень приятно, если она узнает об отмене перед входом в ваш дом.
          </p>
        </TabContent>
      </TabPanel>
    </Tabbordion>
  );

  renderThirdTabQuestions = () => (
    <Tabbordion  blockElements={blockElements}
                 className="accordion"
                 animateContent="height"
                 name="tabs"
                 mode="toggle"
                 bemModifiers={bemModifiers}
                 component="ul">
      <TabPanel>
        <TabLabel>Как я могу оплатить оказанные услуги?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            После того, как домработница завершила все действия по уборке, и результат вам понравился, вы можете оплатить услуги наличными, передав необходимую сумму домработнице. Мы работаем над тем, чтобы создать для вас возможность оплаты через банковскую карту прямо на сайте. Сообщим вам о появлении этого как только, так сразу.
          </p>
        </TabContent>
      </TabPanel>
      <TabPanel>
        <TabLabel>Могу ли я дать чаевые домработнице?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Чаевые всегда на ваше усмотрение. Почему бы и не поблагодарить отдельно за отлично выполненную работу?!
          </p>
        </TabContent>
      </TabPanel>
    </Tabbordion>
  );

  renderFourthTabQuestions = () => (
    <Tabbordion  blockElements={blockElements}
                 className="accordion"
                 animateContent="height"
                 name="tabs"
                 mode="toggle"
                 bemModifiers={bemModifiers}
                 component="ul">
      <TabPanel>
        <TabLabel>У меня есть промокод. Что с ним делать?</TabLabel>
        <TabContent>
          <p className="questions__answer">
            Промокод дает вам возможность получить определенную сумму на уборку, которой вы можете воспользоваться во время заказа. Делитесь промокодом со своими друзьями и  получайте подарки на уборку.
          </p>
        </TabContent>
      </TabPanel>
    </Tabbordion>
  );

  renderQuestions = () => {
    switch (this.state.currentTab) {
      case 1: return this.renderFirstTabQuestions();
      case 2: return this.renderSecondTabQuestions();
      case 3: return this.renderThirdTabQuestions();
      case 4: return this.renderFourthTabQuestions();
    }
  };

  render() {
      const { currentTab } = this.state.currentTab;
    return (
      <div className="questions">
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <div className="agreement__header">
            <Header logo={logo} specClass="questions-background"/>
          </div>
         <div className="questions__inner-container">
           <div className="questions__navigation">
             <div className="questions__navigation__inner-container">
               <div onClick={this.changeTab.bind(this, 1)}
                    className={this.state.currentTab === 1 ? "questions__navigation__element questions__navigation__element--active" : "questions__navigation__element"}>Уборка</div>
               <div onClick={this.changeTab.bind(this, 2)}
className={this.state.currentTab === 2 ? "questions__navigation__element questions__navigation__element--active" : "questions__navigation__element"}>Изменение уборок</div>
               <div onClick={this.changeTab.bind(this, 3)}
                    className={this.state.currentTab === 3 ? "questions__navigation__element questions__navigation__element--active" : "questions__navigation__element"}>Оплата</div>
               <div onClick={this.changeTab.bind(this, 4)}
                    className={this.state.currentTab === 4 ? "questions__navigation__element questions__navigation__element--active" : "questions__navigation__element"}>Бонусы и скидки</div>
             </div>
           </div>
           <div className="questions__block">
            <div className="questions__block__inner-container">
              {this.renderQuestions()}
            </div>
           </div>
         </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Questions;
