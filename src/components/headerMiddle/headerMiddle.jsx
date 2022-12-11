import "./headerMiddle.sass"

const HeaderMiddle = () => {
    return (
        <div className="headerContainer">
            <div className="headerContainer__left">
                <div className="headerContainer__left-item">війна</div>
                <div className="headerContainer__left-item">новини</div>
                <div className="headerContainer__left-item">політика</div>
                <div className="headerContainer__left-item">економіка</div>
                <div className="headerContainer__left-item">суспільство</div>
                <div className="headerContainer__left-item">погляди</div>
                <div className="headerContainer__left-item">світ</div>
            </div>
            <div className="headerContainer__right">
                <div  className="headerContainer__right-item">LIVE</div>
            </div>
        </div>
    )
}

export default HeaderMiddle