import "./allNews.sass"

const AllNews = () => {
    return (
        <div className="allNewsContainer">
            <div className="allNewsContainer__header">
                <div className="allNewsContainer__header-left">Всі новини</div>
                <div className="allNewsContainer__header-right">Архів</div>
            </div>
            <div className="allNewsContainer__nav">
                <div className="activeNav">Всі</div>
                <div>Новини</div>
                <div>Статті</div>
            </div>
            <div className="allNewsContainer__cards-outer">
                <div className="allNewsContainer__cards">
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                    <div className="allNewsContainer__cards-item">
                        <div className="allNewsContainer__cards-photo">Новина з фото</div>
                        <span className="allNewsContainer__cards-time">14:59</span>
                        До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене</div>
                    <div className="allNewsContainer__cards-item">
                        <div className="allNewsContainer__cards-urgent">Термінова новина</div>
                        <span className="allNewsContainer__cards-time">14:59</span>
                        До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        Дружина Зеленського чесно зізналася, чи боїться смерті</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців</div>
                    <div className="allNewsContainer__cards-item">
                        <span className="allNewsContainer__cards-time">14:59</span>
                        Жданов назвав три питання, які обговорять путін і Ердоган</div>
                </div>
            </div>
            <div className="allNewsContainer__button">Завантажити ще</div>
        </div>
    )
}

export default AllNews