import Column from "./Column"
import Politics from "./Politics"
import card from "../../img/card.png"

import "./fiveSections.sass"

const FiveSections = () => {
    return (
        <div className="fiveSectionsContainer">
            <Column></Column>
            <div>
                <Politics></Politics>
                <div className="fiveSectionsContainer__blocks">
                    <div className="fiveSectionsContainer__block">
                        <div className="fiveSectionsContainer__block-header">
                            <div className="fiveSectionsContainer__block-heading">Політика</div>
                            <div className="fiveSectionsContainer__block-all">Всі новини розділу</div>
                        </div>
                        <div className="fiveSectionsContainer__block__grid">
                            <div className="fiveSectionsContainer__block__grid-columnOne">
                                <div className="fiveSectionsContainer__block__grid__mainCard">
                                    <img src={card} alt="card" className="fiveSectionsContainer__block__grid__mainCard-img"/>
                                    <div className="fiveSectionsContainer__block__grid__mainCard-date">05 серпня 11:00</div>
                                    <div className="fiveSectionsContainer__block__grid__mainCard-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
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
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-urgent">Термінова новина</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-video">Новина з відео</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                                </div>
                                <div className="fiveSectionsContainer__block__grid__columnTwo-more">Більше</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fiveSectionsContainer__blocks">
                    <div className="fiveSectionsContainer__block">
                        <div className="fiveSectionsContainer__block-header">
                            <div className="fiveSectionsContainer__block-heading">Політика</div>
                            <div className="fiveSectionsContainer__block-all">Всі новини розділу</div>
                        </div>
                        <div className="fiveSectionsContainer__block__grid">
                            <div className="fiveSectionsContainer__block__grid-columnOne">
                                <div className="fiveSectionsContainer__block__grid__mainCard">
                                    <img src={card} alt="card" className="fiveSectionsContainer__block__grid__mainCard-img"/>
                                    <div className="fiveSectionsContainer__block__grid__mainCard-date">05 серпня 11:00</div>
                                    <div className="fiveSectionsContainer__block__grid__mainCard-desc">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною</div>
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
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-urgent">Термінова новина</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-video">Новина з відео</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                                    <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                    "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                                </div>
                                <div className="fiveSectionsContainer__block__grid__columnTwo-more">Більше</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiveSections