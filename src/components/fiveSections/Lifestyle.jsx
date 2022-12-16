import card from "../../img/card.png"
import lifestyleCard from "../../img/lifestyleCard.png"

const Lifestyle = () => {
    return (
        <div className="fiveSectionsContainer__blocks">
            <div className="fiveSectionsContainer__block">
                <div className="fiveSectionsContainer__block-header">
                    <div className="fiveSectionsContainer__block-heading">Лайфстайл</div>
                    <div className="fiveSectionsContainer__block-all">Всі новини розділу</div>
                </div>
                <div className="fiveSectionsContainer__block__grid">
                    <div className="fiveSectionsContainer__block__grid-columnOne">
                        <div className="fiveSectionsContainer__block__grid__mainCard">
                            <img src={lifestyleCard} alt="card" className="fiveSectionsContainer__block__grid__mainCard-img"/>
                            <div className="fiveSectionsContainer__block__grid__mainCard-header">
                                <div className="fiveSectionsContainer__block__grid__mainCard-date">05 серпня 11:00</div>
                                <div className="fiveSectionsContainer__block__grid__mainCard-interview">Інтерв’ю</div>
                            </div>
                            <div className="fiveSectionsContainer__block__grid__mainCard-desc">Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі</div>
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
                            Що подивитися ввечері: топ-5 українських фільмів</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-bold">
                                <div className="fiveSectionsContainer__block__grid__columnTwo-exclusive">Ексклюзив</div>
                                <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                                Яке свято відзначають 9 серпня: прикмети, традиції та заборони цього дня</div>
                            </div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-video">Новина з відео</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Вакарчук виклав неймовірне відео виконання гімну України в Іспанії</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Топ-7 повсякденних речей, які не мінялися протягом століть</div>
                            <div className="fiveSectionsContainer__block__grid__columnTwo-desc"><span className="fiveSectionsContainer__block__grid__columnTwo-time">14:59</span>
                            Арестович розповів про шалений заробіток, трьох дружин і дітей. Відео</div>
                        </div>
                        <div className="fiveSectionsContainer__block__grid__columnTwo-more">Більше</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lifestyle