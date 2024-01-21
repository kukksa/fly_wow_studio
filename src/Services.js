import cafe from './assets/cafe.png';
import rent from './assets/rent.png';
import camp from './assets/camp.png';
import party from './assets/party.png';
import merch from './assets/sweater.png';
import dress from './assets/dress.png';

import './App.css';


function Services() {

    return <div>   
        <hr />
        <h2 className='title_services'>Дополнительные услуги</h2>
    <div className="container_services">   
        <div className='all_services'>
            <img className='icon_service' src={cafe} alt="" width='100px' />
            <h4 className='service'>Кофейня</h4>
        </div>

        <div className='all_services'>
            <img className='icon_service' src={rent} alt="" width='100px' />
            <h4 className='service'>Аренда залов</h4>
        </div>

        <div className='all_services'>
            <img className='icon_service' src={dress} alt="" width='100px' />
            <h4 className='service'>Аренда костюмов</h4>
        </div> 

        <div className='all_services'>
            <img className='icon_service' src={camp} alt="" width='100px' />
            <h4 className='service'>Летние сборы</h4>
        </div>

        <div className='all_services'>
            <img className='icon_service' src={party} alt="" width='100px' />
            <h4 className='service'>Организация праздников</h4>
        </div>

        <div className='all_services'>
            <img className='icon_service' src={merch} alt="" width='100px' />
            <h4 className='service'>Мерч студии</h4>
        </div>

    </div>
</div>

}

export default Services;