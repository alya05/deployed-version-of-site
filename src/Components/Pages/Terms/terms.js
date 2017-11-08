import React, { Component } from 'react';
import './terms.css';
import {CircleLoader} from 'react-spinners';
import logo from '../../../images/main_logo_colorfull.png';

import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';


class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
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

  render() {
    return (
      <div className="terms">
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <div className="terms__header">
            <Header logo={logo} specClass="terms__header-background"/>
          </div>
          <div className="terms__inner-container">
            <div className="terms__title">
              Пользовательское соглашение
            </div>

            <p className="terms__paragraph">
              Настоящая Оферта является предложением владельца интернет-сервиса zvysh.by (далее – Администрация), о заключении Пользовательского соглашения zvyš (далее – Соглашение) с Заказчиками.
            </p>
            <p className="terms__paragraph">
              Данная Оферта опубликована в сети Интернет по адресу: http://zvysh.by/terms и является публичной офертой.
            </p>

            <ol className="terms__list">
              <li className="terms__list-section">Термины и определения
                <ol>
                  <li className="terms__list-point">
                    Квартира – требующая уборки квартира или часть жилого помещения, включая составляющие ее отдельные помещения (жилые комнаты, санузлы, ванные комнаты, коридор, кухня).
                  </li>
                  <li className="terms__list-point">Администрация - лицо, связывающее посредством Платформы Заказчика и Исполнителя для оказания услуг по уборке Квартир.
                  </li>
                  <li className="terms__list-point">Сайт – веб-сайт, принадлежащий Администрации ресурс, размещенный в сети Интернет по адресу: http://zvysh.by, включая все его разделы, страницы, функциональность, файловую структуру и любые иные структурные элементы, контент, объектный и исходный код.
                  </li>
                  <li className="terms__list-point">Платформа - совокупность Сайта и других технических средств, принадлежащих Администрации,  с помощью которых Заказчик может сделать Заказ.
                  </li>
                  <li className="terms__list-point">
                    Заказчик – физическое или юридическое лицо, оформившее заявку на получение услуг по уборке квартиры посредством Платформы.
                  </li>
                  <li className="terms__list-point">Заказ  - описание услуги по уборке Квартиры, оказание которой требуется Заказчику, переданное Исполнителю Администрацией с использованием Платформы.
                  </li>
                  <li className="terms__list-point">
                    Номер телефона – номер мобильного телефона Заказчика, указанного им в Личном кабинете. Коммуникация между Администрацией, Заказчиком и Исполнителем (звонки, отправка sms-сообщений) осуществляется, в том числе, с использованием Номера телефона.
                  </li>
                  <li className="terms__list-point">
                    Личный кабинет – доступный Заказчику по индивидуальному логину (имени пользователя) и паролю раздел Сайта, содержащий персональные данные Заказчика, сведения о Заказах Заказчика,  в том числе с отражением информации об их выполнении, Бонусах. Именем пользователя (логином) является Адрес электронной почты, указанный Заказчиком.
                  </li>
                  <li className="terms__list-point">
                    Адрес электронной почты – адрес электронной почты Заказчика, указанный Заказчиком в качестве имени пользователя (логина) в Личном кабинете. С использованием Адреса электронной почты Администрация и Заказчик ведут переписку, обмен документами в связи с Соглашением.
                  </li>
                  <li className="terms__list-point">
                    Бонусы – специальные баллы, накопленные Заказчиком, которые Заказчик может использовать для уплаты Стоимости Заказа.
                  </li>
                  <li className="terms__list-point">
                    Договор – Договор о предоставлении доступа к системе заказов ZVYŠ, заключаемый между Администрацией и поставщиками услуг..
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">Предмет Соглашения
                <ol>
                  <li className="terms__list-point">
                    Администрация предоставляет Заказчику возможность размещения Заказа с определением предварительной стоимости, исходя из объема Заказа, и заключением договора на оказание соответствующих услуг с использованием функциональности Платформы.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section"> Регистрация Заказчика на сайте
                <ol>
                  <li className="terms__list-point">
                    Регистрация на Сайте (создание личного кабинета Клиента) осуществляется при размещении Заказчиком своего первого Заказа.
                  </li>
                  <li className="terms__list-point">
                    Процесс регистрации на Сайте регулируется его функциональностью.
                  </li>
                  <li className="terms__list-point">
                    Заказчик обязан указывать свой действующий Номер телефона, адрес электронной почты, адрес Квартиры, а также указывать и поддерживать достоверные, актуальные и правильные сведения о себе при регистрации на Сайте, и представлять себя лично.
                    <ol>
                      <li className="terms__list-point">
                        Если Заказчик предоставил неверную информацию или у Администрации есть основания полагать, что предоставленная Заказчиком информация неполна или недостоверна, Администрация имеет право по своему усмотрению заблокировать доступ в Личный кабинет либо удалить учетную запись Заказчика и отказать Заказчику в использовании Сайта.
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    После регистрации Заказчику предоставляется доступ в его Личный кабинет (Личный кабинет становится доступным для Заказчика по усмотрению Администрации).
                  </li>
                  <li className="terms__list-point">
                    Заказчик вправе изменять свое имя на Сайте, адрес Квартиры, Номер телефона, Адрес электронной почты. с обязательным соблюдением требований о достоверности и актуальности данных.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">Оформление Заказа
                <ol>
                  <li className="terms__list-point">
                    Заказ оформляется путем выбора Заказчиком параметров требуемой ему услуги из заранее предложенных (предустановленных) Администрацией типовых вариантов.
                  </li>
                  <li className="terms__list-point">
                    Используя функциональность Сайта, Заказчик формирует и направляет Администрации Заказ, содержащий:
                      <ol>
                        <li className="terms__list-point">
                          адрес Квартиры;
                        </li>
                        <li className="terms__list-point">
                          количество комнат и санузлов, требующих уборки, количество окон, в случае с уборкой окон, которая также может входить в дополнительные услуги;
                        </li>
                        <li className="terms__list-point">
                          запрос дополнительных услуг по уборке;
                        </li>
                        <li className="terms__list-point">
                          дата и ориентировочное время начала уборки;
                        </li>
                        <li className="terms__list-point">
                          контактную информацию Заказчика;
                        </li>
                        <li className="terms__list-point">
                          иные условия и информацию, предусмотренную функциональностью Сайта.
                        </li>
                      </ol>
                  </li>
                  <li className="terms__list-point">
                    Заказ направляется Администрации путем нажатия Заказчиком кнопки «Оформить заказ» на странице с формой Заказа http://zvysh.by/order/.
                  </li>
                  <li className="terms__list-point">
                    Минимальным объемом Заказа на уборку Квартиры является одна  комната и один санузел.
                  </li>
                  <li className="terms__list-point">
                    Минимальным объемом Заказа на уборку окон является одно окно.
                  </li>
                  <li className="terms__list-point">
                    Администрацией к обработке принимаются только те Заказы, объем которых не ниже минимального установленного.
                  </li>
                  <li className="terms__list-point">
                    Если условия планируемой уборки превышают количество комнат и (или) санузлов, и (или) окон, которые можно указать с использованием функциональности Сайта, обсуждение условий такого Заказа возможно согласовать с Администрацией.
                  </li>
                  <li className="terms__list-point">
                    Заказчик может обратиться в службу поддержки, организуемой Администрацией, для получения консультаций, связанных с функциональностью Сайта и оформлением, изменением или отменой Заказа.
                  </li>
                  <li className="terms__list-point">
                    Администрация осуществляет подбор конкретного поставщика услуг, которому будет предложен Заказ и предоставляет поставщику услуг информацию об адресе, Номере телефона, имени Заказчика, количестве комнат и санузлов, окон, запросе дополнительных услуг, дате и времени уборки.
                  </li>
                  <li className="terms__list-point">
                    Информация о поставщике услуг, который будет осуществлять уборку, размещается в Личном кабинете Заказчика либо путем направления Заказчику SMS-сообщения, как правило, за 12 (двенадцать) часов до начала уборки. Администрация не гарантирует, что оказывать услуги по уборке будет какой-то определенный поставщик услуг.
                  </li>
                  <li className="terms__list-point">
                    Выполнение Заказа Заказчика поставщиком услуги осуществляется на основании размещенного на сайте владельца «Договора на оказание услуг по уборке».
                  </li>
                  <li className="terms__list-point">
                    Отправляя свой Заказ Администрации Заказчик подтверждает, что ознакомился, понимает и согласен с условиями «Договора на оказание услуг по уборке», готов заключить Соглашение.
                  </li>
                  <li className="terms__list-point">
                    Датой заключения “Договора на оказание услуг по уборке» считается дата отображения в личном кабинете Заказчика информации о том, что его Заказ принят поставщиком услуги.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">
                Изменение или отмена Заказа
                <ol>
                  <li className="terms__list-point">
                    Заказчик вправе отменить Заказ не позднее, чем за двадцать четыре часа до наступления времени начала уборки.
                  </li>
                  <li className="terms__list-section">
                    Заказчик вправе внести изменения в Заказ не позднее, чем за 10 (десять) часов до наступления времени начала уборки с последующим перерасчетом стоимости Заказа.
                  </li>
                  <li className="terms__list-point">
                    Заказчик вправе с согласия поставщика услуг изменить Заказ после прибытия поставщика услуг для выполнения Заказа. В случае изменения Заказа осуществляется соответствующий перерасчет стоимости Заказа.
                  </li>
                  <li className="terms__list-point">
                    Администрация вправе изменить Заказ на согласованных с Заказчиком условиях. В таком случае осуществляется перерасчет стоимости Заказа, если изменения влияют на объем Заказа;
                  </li>
                  <li className="terms__list-point">
                    Администрация вправе изменить время исполнения заявки (отменить исполнение заявки) в любой момент до наступления даты уборки в случае наступления обстоятельств форс-мажора или любых иных обстоятельств непреодолимой силы, препятствующих возможности вовремя исполнить заказ.
                  </li>
                  <li className="terms__list-point">
                    Администрация вправе изменить стоимость Заказа в случае, когда поставщик услуг фиксирует дополнительные трудозатраты (например, количество указанных в Заказе комнат и (или) санузлов не соответствует количеству требуемых Заказчиком  для уборки комнат и (или) санузлов) и уведомляет об этом Администрацию.
                  </li>
                  <li className="terms__list-point">
                    Администрация вправе отменить Заказ Заказчика в случае. если ни один из поставщиков услуг, находящихся в отношениях с Администрацией, регулируемых Договором, в силу личных обстоятельств не смог откликнуться на Заказ.
                    <ol>
                      <li className="terms__list-point">
                        Администрация обязуется известить Заказчика об обстоятельствах, описанных в п.п. 5.7 , не позднее, чем за 1 (один) час;
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    Администрация осуществляет расчет окончательной стоимости Заказа и подлежащей уплате Заказчиком суммы.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">Определение стоимости Заказа
                <ol>
                  <li className="terms__list-point">
                    Стоимость Заказа определяется исходя из количества комнат и санузлов, окон, требующих уборки, а также выбора Заказчиком дополнительных услуг по уборке.
                  </li>
                  <li className="terms__list-point">
                      Минимальная предварительная стоимость Заказа определяется автоматически с помощью функциональности Сайта в момент оформления Заказа.
                  </li>
                  <li className="terms__list-point">
                    Расчету предварительной минимальной стоимости Заказа соответствует примерному количество времени, более которого поставщик услуг не должен затратить на выполнение Заказа с заданными параметрами.
                  </li>
                  <li className="terms__list-point">
                    Стоимость Заказа подлежит перерасчету, если в ходе оказания услуг объем Заказа изменился по причинам, описанным в п.п. 5.2, 5.3, 5.4, 5.5;
                  </li>
                  <li className="terms__list-point">
                    Администрация осуществляет расчет окончательной стоимости Заказа и подлежащей уплате Заказчиком суммы.
                  </li>
              </ol>
              </li>
              <li className="terms__list-section">
                Порядок начисления Бонусов и использования Бонусов
                <ol>
                  <li className="terms__list-point">
                    Определение условий бонусных программ, скидок, призовых акций и иных маркетинговых мероприятий стимулирующего характера, а также начисление Бонусов и их аннулирование является правом Администрации, которое используется Администрацией по собственному усмотрению.
                  </li>
                  <li className="terms__list-point">
                    Условия указанных программ публикуются Администрацией на Сайте и (или) направляются Заказчикам на Номер телефона, Адрес электронной почты либо доводятся до сведения Заказчиков иными способами.
                  </li>
                  <li className="terms__list-point">
                    бонусы фиксируются в Личном кабинете Заказчика.
                  </li>
                  <li className="terms__list-point">
                    Бонусы не подлежат обмену на денежные средства либо иное имущество.
                  </li>
                  <li className="terms__list-point">
                    Заказчик вправе комбинировать оплату Стоимости Заказа денежными средствами и использование Бонусов, в частности, промо-кодов, если функциональность Сайта допускает такие действия.
                  </li>
                  <li className="terms__list-point">
                    При прекращении любых указанных программ Администрация имеет право аннулировать Бонусы, если Заказчик не воспользовался Бонусами.
                  </li>
                  <li className="terms__list-point">
                    Бонусы также аннулируются или их использование приостанавливается (блокируется) Администрацией в случае нарушения Заказчиком условий Соглашения или своих обязательств по Соглашению.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">
                Порядок возврата средств и Бонусов Заказчикам
                <ol>
                  <li className="terms__list-point">
                    Заказчику возвращаются денежные средства и  Бонусы, если в результате повторной уборки поставщика услуг не будут устранены недостатки.
                    <ol>
                      <li className="terms__list-point">
                        В таком случае Денежные средства возвращаются Заказчику наличными.
                      </li>
                      <li className="terms__list-point">
                        Возврат Бонусов производится исключительно в виде восстановления Бонусов. Возврат Бонусов денежными средствами не допускается.
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    Для инициации возврата средств и (или) Бонусов Заказчику необходимо направить на адрес электронной почты Администрации feedback@zvysh.by соответствующее мотивированное заявление в произвольной форме.
                  </li>
                  <li className="terms__list-point">
                    В случае удовлетворения заявления Заказчика, возврат средств осуществляется в течение трех рабочих дней со дня получения заявления. В противном случае Администрация на Адрес электронной почты направляет Заказчику мотивированный отказ.
                  </li>
                </ol>
              </li>

              <li className="terms__list-section">
                Иные права и обязанности Сторон
                <ol>
                  <li className="terms__list-point">
                    Заказчик имеет право:
                    <ol>
                      <li className="terms__list-point">
                        используя Платформу размещать Заказ;
                      </li>
                      <li className="terms__list-point">
                        изменять и (или)  отменять Заказ на условиях, прописанных в настоящем Соглашении.
                      </li>
                      <li className="terms__list-point">
                        изменить или отменить Заказ не позднее, чем за двадцать четыре часа  до наступления времени уборки. В случае изменения Заказа Администрация осуществляет соответствующий перерасчет стоимости Заказа.
                      </li>
                      <li className="terms__list-point">
                        изменить с согласия поставщика услуг Заказ после прибытия поставщика услуг для выполнения Заказа. В случае изменения Заказа Администрация осуществляет соответствующий перерасчет стоимости Заказа.
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    Заказчик обязан:
                    <ol>
                      <li className="terms__list-point">
                        указывать достоверные, актуальные и правильные сведения при размещении Заказа;
                      </li>
                      <li className="terms__list-point">
                        указывать в Заказах точные сведения о количестве помещений, в которых необходимо произвести уборку;
                      </li>
                      <li className="terms__list-point">
                        не размещать фиктивных заявок и не вводить в заблуждение поставщиков услуг и (или) владельца сайта, службу приема заявок;
                      </li>
                      <li className="terms__list-point">
                        поддерживать сведения и информацию, указанную в Личном кабинете, в актуальном и достоверном состоянии на протяжении действия Пользовательского соглашения;
                      </li>
                      <li className="terms__list-point">
                        лично оформлять Заказы посредством Личного кабинета, не предоставлять свой логин и пароль третьим лицам и осуществлять все необходимые меры безопасности для обеспечения сохранности своего пароля. Все действия в рамках Пользовательского соглашения или с использованием Сайта под логином и паролем Заказчика, считаются произведенными самим Заказчиком;
                      </li>
                      <li className="terms__list-point">
                        незамедлительно уведомить Администрацию о любом случае несанкционированного доступа к Сайту с использованием пароля Заказчика или о любом нарушении (подозрениях о нарушении) конфиденциальности своего пароля.
                      </li>
                      <li className="terms__list-point">
                        самостоятельно проверить данные Заказа перед его оформлением. Заказчик несет полную ответственность за достоверность и правомерность использования данных, указываемых им при оформлении Заказа. В случае если Заказчику не полностью ясны какие-либо условия размещения Заказа или порядок действий по уборке Квартиры, осуществляемых поставщиком услуг, в том числе, порядок оплаты, Заказчик обязуется уточнить эти условия, а при невозможности уточнения отказаться от оформления Заказа.
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    Администрация имеет право:
                    <ol>
                      <li className="terms__list-point">
                        направлять Заказчику информационные и рекламные сообщения, как по Адресу электронной почты, так и по Номеру мобильного телефона, сведения о которых содержатся на Сайте. Настоящим Соглашением Заказчик дает согласие на получение подобной информации.
                      </li>
                      <li className="terms__list-point">
                        консультировать Заказчика по ходу оформления/подтверждения/оплаты Заказа, в том числе самостоятельно связываться с Заказчиком по указанным Заказчиком номерам телефонов.
                      </li>
                      <li className="terms__list-point">
                        использовать данные Заказчика в маркетинговых целях.
                      </li>
                      <li className="terms__list-point">
                        осуществлять телефонные звонки, направлять sms-сообщения на Номер телефона Заказчика и (или) направлять электронные письма на Адрес электронной почты Заказчика в целях:
                        <ol>
                          <li className="terms__list-point">
                            информирования Заказчика об обработке, принятии, изменении, отмены Заказа;
                          </li>
                          <li className="terms__list-point">
                            проведения проверки и уточнения Заказа;
                          </li>
                          <li className="terms__list-point">
                            сообщения стоимости Заказа, если объем услуг был изменен в процессе уборки Квартиры Исполнителем;
                          </li>
                          <li className="terms__list-point">
                            оповещения Заказчика о новой или изменяемой функциональности Сайта;
                          </li>
                          <li className="terms__list-point">
                            направления иных служебных и информационных сообщений Заказчику, уведомлений о специальных приложениях;
                          </li>
                          <li className="terms__list-point">
                            в иных целях для исполнения Соглашения.
                          </li>
                        </ol>
                      </li>
                      <li className="terms__list-point">
                        Приостанавливать или прекращать предоставление доступа Заказчикам к функциональности Сайта, удалять информацию о Заказчике, удалять учетную запись Заказчика в любой момент без уведомления и (или) объяснения причин.
                      </li>
                    </ol>
                  </li>
                  <li className="terms__list-point">
                    Администрация обязуется:
                    <ol>
                      <li className="terms__list-point">
                        предоставлять Номер телефона Заказчика, Адрес электронной почты, имя, адрес Квартиры и иные условия Заказа только поставщикам услуг для целей оказания ими услуг по уборке.
                      </li>
                      <li className="terms__list-point">
                        обрабатывать персональную информацию о Заказчике в соответствии с условиями Соглашения .
                      </li>
                      <li className="terms__list-point">
                        осуществлять защиту персональной информации, логина и пароля Заказчика от неправомерного доступа находящимися в распоряжении Администрации техническими, организационными и правовыми средствами.
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">
                Ответственность сторон
                <ol>
                  <li className="terms__list-point">
                    Все права и обязанности относительно оказания услуг по уборке возникают исключительно и непосредственно между Заказчиком и поставщиком услуг. Заказчик и поставщик услуг самостоятельно несут взаимную ответственность за исполнение обязательств в рамках исполнения Заказа на основании заключенного между ними “Договора на оказания возмездных услуг”.
                  </li>
                  <li className="terms__list-point">
                    Администрация не несет ответственности за взаимоотношения Клиента и поставщика услуг. Владелец предоставляет сайт как автоматизированный инструмент согласования условий и порядка оказания услуг по уборке, определения предварительной стоимости, оформления заявки.
                  </li>
                  <li className="terms__list-point">
                    Администрация принимает и рассматривает по компетенции обращения по вопросам исполнения настоящего Пользовательского соглашения, а также принимает и перенаправляет для рассмотрения по компетенции обращения Заказчика по вопросам исполнения Заказа поставщиками услуг.
                  </li>
                  <li className="terms__list-point">
                    При возникновении спорных вопросов в отношениях между Заказчиком и поставщиком услуг Администрация может выступать в качестве посредника и независимой стороны для разрешения претензий.
                  </li>
                  <li className="terms__list-point">
                    За неисполнение или ненадлежащее исполнение условий Пользовательского соглашения Заказчик несет ответственность в соответствии с действующим законодательством Республики Беларусь.
                  </li>
                  <li className="terms__list-point">
                    Заказчик несет ответственность за свои действия, связанные с использованием Сайта, а также услуг поставщиков услуг по уборке, в том числе, если такие действия приведут к нарушению прав и законных интересов поставщиков услуг или третьих лиц;
                  </li>
                  <li className="terms__list-point">
                    Заказчик несет ответственность за соответствие содержания информации, размещаемой в Заказах, требованиям законодательства, включая ответственность перед третьими лицами в случаях, когда использование Заказчиком информации нарушает права третьих лиц, в том числе, права на конфиденциальность персональных данных третьих лиц.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">
                Порядок  заключения, изменения и расторжения Соглашения
                <ol>
                  <li className="terms__list-point">
                    При регистрации на Сайте Заказчик подтверждает, что он ознакомлен и согласен с Пользовательским соглашением и принимает (акцептует) оферту на его заключение с Администрацией.
                  </li>
                  <li className="terms__list-point">
                    Каждый Заказ, направленный Заказчиком с помощью функциональности Платформы к Администрации является предложением (офертой) Заказчика неопределенному кругу поставщиков услуг, определяющим существенные условия оказания услуг по уборке жилого помещения.
                  </li>
                  <li className="terms__list-point">
                    Администрация имеет право в любое время вносить изменения и (или) дополнения в Пользовательское соглашение. Администрация уведомляет Заказчика используя его данные.
                  </li>
                  <li className="terms__list-point">
                    Изменения считаются принятыми Заказчиком в случае продолжения использования им Сайта после внесения таких изменений.
                  </li>
                  <li className="terms__list-point">
                    Администрация и Заказчик имеют право в одностороннем порядке отказаться от Соглашения при исполнении всех своих существующих обязательств перед другой Стороной по Соглашению. Соглашение считается расторгнутым с момента получения Стороной соответствующего уведомления от другой Стороны.
                  </li>
                </ol>
              </li>
              <li className="terms__list-section">Иные условия
                <ol>
                  <li className="terms__list-point">
                    Во всем, что не урегулировано Соглашением Стороны будут руководствоваться законодательством Республики Беларусь.
                  </li>
                  <li className="terms__list-point">
                    Все уведомления, указания, извещения, согласия, документы и иного рода сообщения в связи с ходом выполнения Соглашения должны исходить от Стороны лично либо от уполномоченных лиц Стороны и могут быть направлены (если иное не предусмотрено Соглашением) с помощью средств телефонной связи (в том числе, sms-сообщения), электронной почты, или иных электронных средств коммуникации, позволяющих идентифицировать отправителя, получателя, время отправления и получения, а также сохранять и подтверждать историю обмена корреспонденцией.
                  </li>
                  <li className="terms__list-point">
                    Права и обязанности по Соглашению не могут быть переданы Стороной третьим лицам без предварительного письменного согласия другой Стороны.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Terms;
