import '../App.css';
import dataServices from './dataServices';
import Service from './Service';


function Services() {

    return <div>   
        <hr />
        <h2 className='title_services'>Дополнительные услуги</h2>

        <div className="container_services">
            {dataServices
            .map(service => <Service service={service} key={service.id} />)}
        </div>

</div>

}

export default Services;