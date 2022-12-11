import mainCard from "../../img/videobg.jpg"

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
                </div>
            </div>
        </div>
    )
}

export default VideoSection