import "./bigPIc.sass"
import left from "../../icons/arrowLeft.png"
import right from "../../icons/arrowRight.png"
import icon1 from "../../img/icon1.png"
import icon2 from "../../img/icon2.png"
import icon3 from "../../img/icon3.png"
import icon4 from "../../img/icon4.png"

const BigPic = () => {
    const heading1 = "Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»."
    const heading2 = "Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження."
    const heading3 = 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини.'
    const heading4 = "Сейм Латвії визнав рф країною-спонсором тероризму."

    return (
        <div className="bigPicContainer">
            <div className="bigPicContainer__overlay">
                <div className="bigPicContainer__heading">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій<br></br> команді немає»</div>
                <div className="bigPicContainer__arrows">
                    <img src={left} alt="Left" />
                    <div className="bigPicContainer__counter">1 / 4</div>
                    <img src={right} alt="Right" />
                </div>
                <div className="bigPicContainer__cardRow">
                    <div className="bigPicContainer__cardRow__item activeCard">
                        <img className="bigPicContainer__cardRow__item-img" src={icon1} alt="icon1"></img>
                        <div className="bigPicContainer__cardRow__item-txt">{heading1.length > 70 ? heading1.slice(0, 69) + "..." : heading1}</div>
                    </div>
                    <div className="bigPicContainer__cardRow__item">
                        <img className="bigPicContainer__cardRow__item-img" src={icon2} alt="icon2"></img>
                        <div className="bigPicContainer__cardRow__item-txt">{heading2.length > 70 ? heading2.slice(0, 69) + "..." : heading2}</div>
                    </div>
                    <div className="bigPicContainer__cardRow__item">
                        <img className="bigPicContainer__cardRow__item-img" src={icon3} alt="icon3"></img>
                        <div className="bigPicContainer__cardRow__item-txt">{heading3.length > 70 ? heading3.slice(0, 69) + "..." : heading3}</div>
                    </div>
                    <div className="bigPicContainer__cardRow__item">
                        <img className="bigPicContainer__cardRow__item-img" src={icon4} alt="icon4"></img>
                        <div className="bigPicContainer__cardRow__item-txt">{heading4.length > 70 ? heading4.slice(0, 69) + "..." : heading4}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigPic