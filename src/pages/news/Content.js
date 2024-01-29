import './News.css';
import cross from '../assets/cross.png';


const Content = ({setIsOpen}) => {
    return ( <div className="modal_content">
        <h3>Для более подробной информации свяжитесь с нами по телефону</h3>
        <h3>+372-555 5555</h3>
        
        <button className='btn_cross_contentModal' onClick={() => setIsOpen(false)}><img src={cross} alt="" /></button>

    </div> )
}
export default Content;