import "./fiveSections.sass"
import avatar1 from "../../icons/Avatar1.png"
import avatar2 from "../../icons/Avatar2.png"
import avatar3 from "../../icons/Avatar3.png"
import avatar4 from "../../icons/Avatar4.png"

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
            <div className="fiveSectionsContainer__blocks">
                <div className="fiveSectionsContainer__blocks__politics">
                    <div className="fiveSectionsContainer__blocks__politics-header">
                        <div className="fiveSectionsContainer__blocks__politics-heading">Політика</div>
                        <div className="fiveSectionsContainer__blocks__politics-all">Всі новини розділу</div>
                    </div>
                    <div className="fiveSectionsContainer__blocks__politics-grid">
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiveSections