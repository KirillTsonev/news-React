import facebook from "../../icons/Facebook.svg"
import instagram from "../../icons/Instagram.svg"
import youtube from "../../icons/YouTube.svg"
import telegram from "../../icons/Telegram.svg"
import glass from "../../icons/MagnifyingGlass.svg"

import "./headerTop.sass"

const HeaderTop = () => {
	return (
		<div className="header__container">
			<div className="header__container__left">
				<div className="header__container__menu">Меню</div>

				<ul className="header__container__nav">
					<li>Київ</li>
					<li>Одеса</li>
					<li>Харків</li>
				</ul>
			</div>

			<div className="header__container__right">
				<div>
					<img src={glass} alt="glass" className="header__container__right-glass"/>
					<input className="header__container__right-search" type="text" name="search" placeholder="пошук новин"/>
				</div>

				<div>
					<div className="header__container__right-right">
						<div className="header__container__right-socials">
							<a href="https://telegram.org/" target="_blank" rel="noreferrer"><img src={telegram} alt="telegram" /></a>
							<a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
							<a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
							<a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" /></a>
						</div>

						<div className="header__container__right-langs">
							<div style={{"color": "#2D2D2D"}}>RU</div>
							<div style={{"color": "#B0B0B0"}}>UA</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop