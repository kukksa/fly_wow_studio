import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Sale() {

    const navigate = useNavigate();

    return (
        <div className="tickets container_news">
            <h4 className="text_sale">Только в ЯНВАРЕ, покупая один абонемент, второй вы можете приобрести со скидкой 50%</h4>
            <p className='text_news'>Скидка действует на один любой абонемент для друга или члена семьи. Второй абонемент может быть оформлен на любой месяц 2025 года.</p>
            <Link to={`/schedule`}>
                <button className="btn_sale">Посмотреть цены </button>    
            </Link>
            <button className="btn_sale" onClick={() => navigate(-1)}>Обратно к новостям</button>

        </div>
    )
}

export default Sale;