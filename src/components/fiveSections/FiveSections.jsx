import "./fiveSections.sass"

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
                        <img src="" alt="" className="fiveSectionsContainer__column__item-img"/>
                        <div className="fiveSectionsContainer__column__item-heading">
                            <div className="fiveSectionsContainer__column__item-name">Юлія Стахівська</div>
                            <div className="fiveSectionsContainer__column__item-title">письменниця</div>
                        </div>
                    </div>
                    <div className="fiveSectionsContainer__column__item-desc">Жінок в часи небезпеки приваблюють сильні чоловіки</div>
                    <div className="fiveSectionsContainer__column__item-date">04 серпня 15:15</div>
                </div>
                <div className="fiveSectionsContainer__column__button">Всі колонки</div>
            </div>
            <div className="fiveSectionsContainer__blocks">

            </div>
        </div>
    )
}

export default FiveSections