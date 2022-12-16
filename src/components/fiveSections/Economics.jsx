import card from "../../img/card.png"

const Economics = () => {
    return (
        <div>
            <div className="fiveSectionsContainer__block">
                <div className="fiveSectionsContainer__block-header">
                    <div className="fiveSectionsContainer__block-heading">Економіка</div>
                    <div className="fiveSectionsContainer__block-all">Всі новини розділу</div>
                </div>
                <div className="fiveSectionsContainer__block__grid">
                    <div className="fiveSectionsContainer__block__grid-columnOne">
                        <div className="fiveSectionsContainer__block__grid__mainCard">
                            <img src={card} alt="card" className="fiveSectionsContainer__block__grid__mainCard-img"/>
                            <div className="fiveSectionsContainer__block__grid__mainCard-date">05 серпня 11:00</div>
                            <div className="fiveSectionsContainer__block__grid__mainCard-desc">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                        </div>
                        <div className="fiveSectionsContainer__block__grid__twoCards">
                            <div className="fiveSectionsContainer__block__grid__twoCards__cardMini">
                                <img src={card} alt="card" className="fiveSectionsContainer__block__grid__twoCards__cardMini-img"/>
                                <div className="fiveSectionsContainer__block__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                <div className="fiveSectionsContainer__block__grid__twoCards__cardMini-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                            </div>
                            <div className="fiveSectionsContainer__block__grid__twoCards__cardMini">
                                <img src={card} alt="card" className="fiveSectionsContainer__block__grid__twoCards__cardMini-img"/>
                                <div className="fiveSectionsContainer__block__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                <div className="fiveSectionsContainer__block__grid__twoCards__cardMini-desc">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                            </div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__block__grid__columnTwo">
                        <div className="fiveSectionsContainer__block__grid__columnTwo-heading">Новини розділу</div>
                        <div className="fiveSectionsContainer__block__grid__columnTwo-news">
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            McDonald’s відновлює роботу ресторанів в Україні: де відкриються перші</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-bold">
                                <div className="fiveSectionsContainer__block__grid__columnTwo-online">Онлайн</div>
                                <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                Рада готує новий податковий сюрприз для обмінників: Гетманцев дав роз'яснення</div>
                            </div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Росія хоче перемкнути Запорізьку АЕС на Крим: експерт пояснив шанси і ризики</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Як Ощадбанк під час війни безперебійно підтримує аграріїв</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Переселенці зможуть отримувати виплати навіть у разі втрати паспорта: що відомо</div>
                        </div>
                        <div className="fiveSectionsContainer__block__grid__columnTwo-more">Більше</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Economics