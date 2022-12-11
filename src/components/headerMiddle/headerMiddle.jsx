import "./headerMiddle.sass"

const HeaderMiddle = () => {
    return (
        <div className="headerContainerMiddle">
            <div className="headerContainerMiddle__left">
                <div className="headerContainerMiddle__left-item">війна</div>
                <div className="headerContainerMiddle__left-item">новини</div>
                <div className="headerContainerMiddle__left-item">політика</div>
                <div className="headerContainerMiddle__left-item">економіка</div>
                <div className="headerContainerMiddle__left-item">суспільство</div>
                <div className="headerContainerMiddle__left-item">погляди</div>
                <div className="headerContainerMiddle__left-item">світ</div>
            </div>
            <div className="headerContainerMiddle__right">
                <div  className="headerContainerMiddle__right-item">LIVE</div>
            </div>
        </div>
    )
}

export default HeaderMiddle