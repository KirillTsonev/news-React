import "./headerBottom.sass"

import army from "../../icons/personnel.png"
import tank from "../../icons/tank.png"
import artillery from "../../icons/artillery.png"
import plane from "../../icons/plane.png"
import mlrs from "../../icons/missile.png"
import helicopter from "../../icons/helicopter.png"
import heavy from "../../icons/heavy.png"

const HeaderBottom = () => {
    return (
        <div className="headerContainerBottom">
            <div className="headerContainerBottom__days">131 день війни:</div>
            <div className="headerContainerBottom__running-outer">
                <div className="headerContainerBottom__running-inner run">
                    <div className="headerContainerBottom__running-item">
                        <img src={army} alt="Personnel" className="headerContainerBottom__running-img"/>
                        <div>особовий склад <span>~36 200</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={tank} alt="Tanks" className="headerContainerBottom__running-img"/>
                        <div>танки <span>1 589</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={artillery} alt="Artillery" className="headerContainerBottom__running-img"/>
                        <div>артсистеми <span>4578</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={plane} alt="Planes" className="headerContainerBottom__running-img"/>
                        <div>літаки <span>220</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={mlrs} alt="MLRS" className="headerContainerBottom__running-img"/>
                        <div>РСЗВ <span>246</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={helicopter} alt="Helicopters" className="headerContainerBottom__running-img"/>
                        <div>гелікоптери <span>190</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={heavy} alt="Heavy equipment" className="headerContainerBottom__running-img"/>
                        <div>ББМ <span>4578</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={army} alt="Personnel" className="headerContainerBottom__running-img"/>
                        <div>особовий склад <span>~36 200</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={tank} alt="Tanks" className="headerContainerBottom__running-img"/>
                        <div>танки <span>1 589</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={artillery} alt="Artillery" className="headerContainerBottom__running-img"/>
                        <div>артсистеми <span>4578</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={plane} alt="Planes" className="headerContainerBottom__running-img"/>
                        <div>літаки <span>220</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={mlrs} alt="MLRS" className="headerContainerBottom__running-img"/>
                        <div>РСЗВ <span>246</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={helicopter} alt="Helicopters" className="headerContainerBottom__running-img"/>
                        <div>гелікоптери <span>190</span></div>
                    </div>
                    <div className="headerContainerBottom__running-item">
                        <img src={heavy} alt="Heavy equipment" className="headerContainerBottom__running-img"/>
                        <div>ББМ <span>4578</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom