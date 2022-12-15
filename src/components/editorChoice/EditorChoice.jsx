import card from "../../img/card.png"

import "./editorChoice.sass"

const EditorChoice = () => {
    return (
        <div className="editorChoiceContainer">
            <div className="editorChoiceContainer__heading">Вибір редакції</div>

            <div className="editorChoiceContainer__grid">
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                </div>
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.</div>
                </div>
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.</div>
                </div>
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
                </div>
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.</div>
                </div>
                <div className="editorChoiceContainer__grid-item">
                    <img src={card} alt="Card" className="editorChoiceContainer__grid-img"/>
                    <div className="editorChoiceContainer__grid-date">05 серпня 11:00</div>
                    <div className="editorChoiceContainer__grid-heading">Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.</div>
                </div>
            </div>
        </div>
    )
}

export default EditorChoice