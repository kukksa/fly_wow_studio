import { useNavigate } from "react-router-dom";



function Concert() {

    const navigate = useNavigate();

    return (
        <div className="tickets container_news">
            <h4 className="text_sale">27 декабря состоится отчетный концерт студии</h4>
            <p className='text_news'>Для участия необходимо сообщить нашим администраторам о своем желании, а также оплатить сбор за участие.</p>
            <p className='text_news'>Стоимость участия:</p>
            <p className='text_news'>Один номер - 25€ <br /> Два номера или дуэт - 40€ <br /> Три номера - 50€ </p>
            <p className='text_news'>Сбор за участие не подлежит возврату</p>
            <button className="btn_sale" onClick={() => navigate(-1)}>Обратно к новостям</button>

        </div>
    )
}

export default Concert;