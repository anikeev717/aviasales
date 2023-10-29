import './App.scss';
import logo from '../../assets/images/Logo.svg';
import ticketLogo from '../../assets/images/Ticket.svg';

export const App: React.FC<Record<string, never>> = (): JSX.Element => {
  return (
    <div className="app">
      <div className="logo">
        <img className="logo__image" alt="logo" src={logo} />
      </div>
      <div className="content">
        <form className="filter" name="filter-form">
          <fieldset>
            <legend className="filter__title">Количество пересадок</legend>
            <label htmlFor="all" className="filter__label">
              <input type="checkbox" id="all" name="all" className="filter__input" />
              Все
            </label>
            <label htmlFor="none" className="filter__label">
              <input type="checkbox" id="none" name="none" className="filter__input" />
              Без пересадок
            </label>
            <label htmlFor="one" className="filter__label">
              <input type="checkbox" id="one" name="one" className="filter__input" />1 пересадка
            </label>
            <label htmlFor="two" className="filter__label">
              <input type="checkbox" id="two" name="two" className="filter__input" />2 пересадки
            </label>
            <label htmlFor="three" className="filter__label">
              <input type="checkbox" id="three" name="three" className="filter__input" />3 пересадки
            </label>
          </fieldset>
        </form>
        <div className="main">
          <form className="main__tabs tabs" name="tabs-form">
            <button className="tabs__item tabs__item-active" type="button">
              Самый дешевый
            </button>
            <button className="tabs__item" type="button">
              Самый быстрый
            </button>
          </form>
          <ul className="main__tickets tickets">
            <li className="tickets__item ticket">
              <div className="ticket__header">
                <span className="ticket__price">13400</span>
                <img className="ticket__image" src={ticketLogo} alt="ticket-logo" />
              </div>
              <div className="ticket__info info">
                <div className="info__line">
                  <div className="info__field">
                    <span className="info__title">MOV - HKT</span>
                    <span className="info__description">10:45 - 08:00</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">В пути</span>
                    <span className="info__description">21ч 15м</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__description">HKG, JNB</span>
                  </div>
                </div>
                <div className="info__line">
                  <div className="info__field">
                    <span className="info__title">MOV - HKT</span>
                    <span className="info__description">10:45 - 08:00</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">В пути</span>
                    <span className="info__description">21ч 15м</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__description">HKG, JNB</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="tickets__item ticket">
              <div className="ticket__header">
                <span className="ticket__price">13400</span>
                <img className="ticket__image" src={ticketLogo} alt="ticket-logo" />
              </div>
              <div className="ticket__info info">
                <div className="info__line">
                  <div className="info__field">
                    <span className="info__title">MOV - HKT</span>
                    <span className="info__description">10:45 - 08:00</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">В пути</span>
                    <span className="info__description">21ч 15м</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__description">HKG, JNB</span>
                  </div>
                </div>
                <div className="info__line">
                  <div className="info__field">
                    <span className="info__title">MOV - HKT</span>
                    <span className="info__description">10:45 - 08:00</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">В пути</span>
                    <span className="info__description">21ч 15м</span>
                  </div>
                  <div className="info__field">
                    <span className="info__title">2 пересадки</span>
                    <span className="info__description">HKG, JNB</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <form className="main__fetch fetch" name="fetch-form">
            <button className="fetch__button" type="button">
              Показать еще 5 билетов
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
