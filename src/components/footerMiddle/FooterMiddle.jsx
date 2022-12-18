import yt from "../../icons/yt.png"
import tg from "../../icons/tg.png"
import ig from "../../icons/ig.png"
import fb from "../../icons/fb.png"
import tt from "../../icons/tt.png"
import gn from "../../icons/gn.png"

import "./footerMiddle.sass"

const FooterMiddle = () => {
    return (
        <div className="footerMiddleContainer">
            <div className="footerMiddleContainer__heading">Новини у зручному форматі</div>
            <div className="footerMiddleContainer__social">
                <div className="footerMiddleContainer__social-item">
                    <img src={yt} alt="YouTube" />
                    <div className="footerMiddleContainer__social-link">YouTube</div>
                </div>
                <div className="footerMiddleContainer__social-item">
                    <img src={tg} alt="Telegram" />
                    <div className="footerMiddleContainer__social-link">Telegram</div>
                </div>
                <div className="footerMiddleContainer__social-item">
                    <img src={ig} alt="Instagram" />
                    <div className="footerMiddleContainer__social-link">Instagram</div>
                </div>
                <div className="footerMiddleContainer__social-item">
                    <img src={fb} alt="Facebook" />
                    <div className="footerMiddleContainer__social-link">Facebook</div>
                </div>
                <div className="footerMiddleContainer__social-item">
                    <img src={tt} alt="TikTok" />
                    <div className="footerMiddleContainer__social-link">TikTok</div>
                </div>
                <div className="footerMiddleContainer__social-item">
                    <img src={gn} alt="Google News" />
                    <div className="footerMiddleContainer__social-link">Google News</div>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle