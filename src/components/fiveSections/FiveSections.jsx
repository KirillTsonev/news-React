import "./fiveSections.sass"
import avatar1 from "../../icons/Avatar1.png"
import avatar2 from "../../icons/Avatar2.png"
import avatar3 from "../../icons/Avatar3.png"
import avatar4 from "../../icons/Avatar4.png"
import card from "../../img/card.png"

const FiveSections = () => {
    return (
        <div className="fiveSectionsContainer">
            <div className="fiveSectionsContainer__column">
                <div className="fiveSectionsContainer__column__header">
                    <div className="fiveSectionsContainer__column__header-heading">Колонки</div>
                    <div className="fiveSectionsContainer__column__header-all">Всі колонки</div>
                </div>
                <div className="fiveSectionsContainer__column__item">
                    <div className="fiveSectionsContainer__column__item-header">
                        <img src={avatar1} alt="avatar1" className="fiveSectionsContainer__column__item-img"/>
                        <div className="fiveSectionsContainer__column__item-heading">
                            <div className="fiveSectionsContainer__column__item-name">Юлія Стахівська</div>
                            <div className="fiveSectionsContainer__column__item-title">письменниця</div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__column__item-desc">Жінок в часи небезпеки приваблюють сильні чоловіки</div>
                    <div className="fiveSectionsContainer__column__item-date">04 серпня 15:15</div>
                </div>
                <div className="fiveSectionsContainer__column__item">
                    <div className="fiveSectionsContainer__column__item-header">
                        <img src={avatar2} alt="avatar2" className="fiveSectionsContainer__column__item-img"/>
                        <div className="fiveSectionsContainer__column__item-heading">
                            <div className="fiveSectionsContainer__column__item-name">Юрій Андрухович</div>
                            <div className="fiveSectionsContainer__column__item-title">письменник</div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__column__item-desc">Штайнмаєр - людина-формула</div>
                    <div className="fiveSectionsContainer__column__item-date">04 серпня 15:15</div>
                </div>
                <div className="fiveSectionsContainer__column__item">
                    <div className="fiveSectionsContainer__column__item-header">
                        <img src={avatar3} alt="avatar3" className="fiveSectionsContainer__column__item-img"/>
                        <div className="fiveSectionsContainer__column__item-heading">
                            <div className="fiveSectionsContainer__column__item-name">Анна Прокопенко</div>
                            <div className="fiveSectionsContainer__column__item-title">журналістка</div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__column__item-desc">Щоденник війни. П'ятий тиждень довгого лютого</div>
                    <div className="fiveSectionsContainer__column__item-date">04 серпня 15:15</div>
                </div>
                <div className="fiveSectionsContainer__column__item">
                    <div className="fiveSectionsContainer__column__item-header">
                        <img src={avatar4} alt="avatar4" className="fiveSectionsContainer__column__item-img"/>
                        <div className="fiveSectionsContainer__column__item-heading">
                            <div className="fiveSectionsContainer__column__item-name">Ірена Карпа</div>
                            <div className="fiveSectionsContainer__column__item-title">журналістка</div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__column__item-desc">Не пощастило з географією. Небезпечний сусід</div>
                    <div className="fiveSectionsContainer__column__item-date">04 серпня 15:15</div>
                </div>
                <div className="fiveSectionsContainer__column__button">Всі колонки</div>
            </div>
            <div>
                <div className="fiveSectionsContainer__blocks">
                    <div className="fiveSectionsContainer__blocks__politics">
                        <div className="fiveSectionsContainer__blocks__politics-header">
                            <div className="fiveSectionsContainer__blocks__politics-heading">Політика</div>
                            <div className="fiveSectionsContainer__blocks__politics-all">Всі новини розділу</div>
                        </div>
                        <div className="fiveSectionsContainer__blocks__politics__grid">
                            <div className="fiveSectionsContainer__blocks__politics__grid-columnOne">
                                <div className="fiveSectionsContainer__blocks__politics__grid__mainCard">
                                    <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__mainCard-img"/>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-date">05 серпня 11:00</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__twoCards">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                    </div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo">
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-heading">Новини розділу</div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-news">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-urgent">Термінова новина</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-video">Новина з відео</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-more">Більше</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fiveSectionsContainer__blocks">
                    <div className="fiveSectionsContainer__blocks__politics">
                        <div className="fiveSectionsContainer__blocks__politics-header">
                            <div className="fiveSectionsContainer__blocks__politics-heading">Політика</div>
                            <div className="fiveSectionsContainer__blocks__politics-all">Всі новини розділу</div>
                        </div>
                        <div className="fiveSectionsContainer__blocks__politics__grid">
                            <div className="fiveSectionsContainer__blocks__politics__grid-columnOne">
                                <div className="fiveSectionsContainer__blocks__politics__grid__mainCard">
                                    <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__mainCard-img"/>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-date">05 серпня 11:00</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__twoCards">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                    </div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo">
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-heading">Новини розділу</div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-news">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-urgent">Термінова новина</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-video">Новина з відео</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-more">Більше</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fiveSectionsContainer__blocks">
                    <div className="fiveSectionsContainer__blocks__politics">
                        <div className="fiveSectionsContainer__blocks__politics-header">
                            <div className="fiveSectionsContainer__blocks__politics-heading">Політика</div>
                            <div className="fiveSectionsContainer__blocks__politics-all">Всі новини розділу</div>
                        </div>
                        <div className="fiveSectionsContainer__blocks__politics__grid">
                            <div className="fiveSectionsContainer__blocks__politics__grid-columnOne">
                                <div className="fiveSectionsContainer__blocks__politics__grid__mainCard">
                                    <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__mainCard-img"/>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-date">05 серпня 11:00</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__mainCard-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__twoCards">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
                                    </div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini">
                                        <img src={card} alt="card" className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-img"/>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-date">05 серпня 11:00</div>
                                        <div className="fiveSectionsContainer__blocks__politics__grid__twoCards__cardMini-desc">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
                                    </div>
                                </div>
                            </div>
                            <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo">
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-heading">Новини розділу</div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-news">
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-urgent">Термінова новина</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-video">Новина з відео</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                                    <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-desc"><span className="fiveSectionsContainer__blocks__politics__grid__columnTwo-time">14:59</span>
                                    "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                                </div>
                                <div className="fiveSectionsContainer__blocks__politics__grid__columnTwo-more">Більше</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiveSections