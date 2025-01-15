import '../../../App.css';

const Service = ({service}) => {
    return <div className='all_services'>
        <img className='icon_service' src={service.icon} alt="services" width='100px'/>
        <h4 className='service'>{service.name}</h4>
    </div>
}
export default Service;