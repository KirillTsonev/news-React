import ad from "../../img/ad.png"
import more from "../../icons/promoArrow.png"

import "./promo.sass"

const Promo = () => {
    return (
        <div className="promoContainer">
            <div className="promoContainer__header">
                <div className="promoContainer__header-heading">Промо</div>
                <div className="promoContainer__header-all">Всі матеріали</div>
            </div>
            <div className="promoContainer__ad">
                <div className="promoContainer__ad__main">
                    <img src={ad} alt="Ad" />
                    <div className="promoContainer__ad__main-text">
                        <div className="promoContainer__ad__main-header">
                            <div className="promoContainer__ad__main-date">05 серпня 11:00</div>
                            <div className="promoContainer__ad__main-promo">Промо</div>
                        </div>
                        <div className="promoContainer__ad__main-desc">Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів</div>
                    </div>
                </div>
                <div className="promoContainer__ad__cards">
                    <div className="promoContainer__ad__cards__inner">
                        <div className="promoContainer__ad__cards__item">
                            <div className="promoContainer__ad__cards__item-date">05 серпня 11:00</div>
                            <div className="promoContainer__ad__cards__item-desc">Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте...</div>
                        </div>
                        <div className="promoContainer__ad__cards__item">
                            <div className="promoContainer__ad__cards__item-date">05 серпня 11:00</div>
                            <div className="promoContainer__ad__cards__item-desc">Зустрічай нову серію смартфонів та навушників від Samsung</div>
                        </div>
                        <div className="promoContainer__ad__cards__item">
                            <div className="promoContainer__ad__cards__item-date">05 серпня 11:00</div>
                            <div className="promoContainer__ad__cards__item-desc">Мобільний телефон Xiaomi Redmi 9C 3/64GB</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promoContainer__more">
                <img src={more} alt="More" className="promoContainer__more-arrow" />
            </div>
        </div>
    )
}

export default Promo