import "./footerBottom.sass"

const FooterBottom = () => {
    return (
        <div className="footerBottomContainer">
            <div className="footerBottomContainer-heading">© 2020-2022, ТОВ «Медіа Мережі»</div>
            <div className="footerBottomContainer__policies">
                <div className="footerBottomContainer__policies-item">Політика користувача</div>
                <div className="footerBottomContainer__policies-item">Політика конфіденційності</div>
                <div className="footerBottomContainer__policies-item">Політика Cookie-файлів</div>
            </div>
        </div>
    )
}

export default FooterBottom