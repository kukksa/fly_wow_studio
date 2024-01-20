import './Footer.css'
import FormFooter from './FormFooter';
import iconInstagram from '../resources/icons8-instagram-30.png';
import iconFacebook from '../resources/icons8-facebook-30.png';

function Footer() {
    return(
    <div>
        <div className="container_footer">
            <div className='adress_footer'>
                <h2 className='logo_name_footer'>FLY WOW! studio</h2>
                <h3>НАШ АДРЕС:</h3>
                <h3>Fr. R. Faehlmanni 4, Tallinn</h3>
                <h3>Тел.: +372 555 5555</h3>
                <h3>E-mail: info@flywow-studio.ee</h3>           
                <img className='icon_footer' src={iconInstagram}alt="Instagram" />
                <img className='icon_footer' src={iconFacebook} alt="Facebook" />            
            </div>
        <FormFooter/>   
    </div>
        <hr />
        <p className='madeBy'>Made by Daria Kukk</p>
    </div>
    )
    
}
export default Footer;