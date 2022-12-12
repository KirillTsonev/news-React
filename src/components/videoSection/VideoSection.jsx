import mainCard from "../../img/videobg.jpg"
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import card3 from "../../img/card3.png"
import card4 from "../../img/card4.png"

import "./videoSection.sass"

const VideoSection = () => {
    return (
        <div className="videoSectionContainer">
            <div className="videoSectionContainer__overlay">
                <div className="videoSectionContainer__header">
                    <div className="videoSectionContainer__header-heading">Відео</div>
                    <div className="videoSectionContainer__header-more">Більше новин</div>
                </div>
                <div className="videoSectionContainer__grid">
                    <div className="videoSectionContainer__grid__main">
                        <div className="videoSectionContainer__grid__main-img"><img src={mainCard} alt="Card"/></div>
                        <div className="videoSectionContainer__grid__main-date">05 серпня 11:00</div>
                        <div className="videoSectionContainer__grid__main-heading">"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником</div>
                    </div>
                    <div className="videoSectionContainer__grid__item">
                        <div className="videoSectionContainer__grid__item-img"><img src={card1} alt="Card" /></div>
                        <div className="videoSectionContainer__grid__item-date">05 серпня 11:00</div>
                        <div className="videoSectionContainer__grid__item-heading">Ватажок "ДНР" підтвердив підготовку самосуду над полоненим...</div>
                    </div>
                    <div className="videoSectionContainer__grid__item">
                        <div className="videoSectionContainer__grid__item-img"><img src={card3} alt="Card" /></div>
                        <div className="videoSectionContainer__grid__item-date">05 серпня 11:00</div>
                        <div className="videoSectionContainer__grid__item-heading">"Спекотні літні канікули": Міноборони України попередило...</div>
                    </div>
                    <div className="videoSectionContainer__grid__item">
                        <div className="videoSectionContainer__grid__item-img"><img src={card2} alt="Card" /></div>
                        <div className="videoSectionContainer__grid__item-date">05 серпня 11:00</div>
                        <div className="videoSectionContainer__grid__item-heading">Під москвою палала військова частина, де проходять службу...</div>
                    </div>
                    <div className="videoSectionContainer__grid__item">
                        <div className="videoSectionContainer__grid__item-img"><img src={card4} alt="Card" /></div>
                        <div className="videoSectionContainer__grid__item-date">05 серпня 11:00</div>
                        <div className="videoSectionContainer__grid__item-heading">СБУ затримала в Києві "військового експерта", який працював на росію...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection