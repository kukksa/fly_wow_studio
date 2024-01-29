import Table from "./Table";

function Schedule() {
    return <div>
        <h2 className="title_schedule">Наше расписание</h2>
        <Table/>
        <div className="container_price_schedule">
            <h2 className="price_schedule">Цены</h2>
            
            <h4 className="options_price_schedule">Разовые занятия:</h4>
            <p className="price">Пробное занятие: бесплатно</p>
            <p className="price">Разовое занятие: 10€</p>
            <p className="price">Индивидуальное занятие: 25€</p>

            <h4 className="options_price_schedule">Абонементы:</h4>
            <p className="price">На 8 занятий: 50€</p>
            <p className="price">На 16 занятий: 75€</p>
            <p className="price">На 20 занятий: 90€</p>
            <p className="price">На 30 занятий: 105€</p>
            <p className="price">Абонементы действуют на все групповые занятия, кроме спец групп. Группы от двух до шести человек на пилоне или восьми человек на других тренировках. Срок действия абонемента: календарный месяц. После истечения срока действия абонемента обязательства по нему прекращаются. При невозможности использовать купленный абонемент в полном объеме, необходимо до окончания срока действия абонемента запросить перерасчет. Перерасчет абонемента производится по цене разового занятия.</p>
            <h4 className="options_price_schedule">Аренда:</h4>
            <p className="price">Аренда любого зала: 25€ в час</p>
        </div>
        </div>

}

export default Schedule;