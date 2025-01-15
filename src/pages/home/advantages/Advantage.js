import '../../../App.css';

const Advantage = ({advantage}) => {

    return <div className='advantages'>
        
        <img className='icon_advantages' src={advantage.img} alt="gymnast" width='150px'/>
        <h2 className='about_advantages'>{advantage.about}</h2>
        <p className='text_about_advantages'>{advantage.text}</p>

    </div>
}

export default Advantage;
