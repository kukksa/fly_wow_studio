import iconHeaderMini from '../assets/Frame.png';
import iconHeaderMiniTwo from '../assets/Union.png';
import '../App.css';

function Header() {

    return <div className='container_header'>

        <div className='content_header'>
            <img className='icon_header ' src={iconHeaderMiniTwo} alt="gym" width='280px'/>
            
            <div className='title_header'>               
                <h1 className='title'>Добро пожаловать к нам в студию</h1>
                <p className="text_title_header_first">Мы предлагаем персональные и групповые занятия для детей и взрослых по направлениям: Pole Dance, Воздушные полотна, Воздушное кольцо, а также Стретчинг и Аэро-Йога.</p>
            </div>
        </div>

        <div className='container_subscribe_btn_header'>
            <button className='subscribe_btn_header'><a href="#subscribe">Записаться на пробное занятие</a></button>
        </div>
        
        <div className= 'content_header'>       
            <p className="text_title_header_second">К вашим услугам тренеры и инструкторы высокой квалификации, профессионалы и фанаты своего дела, доброжелательный персонал, высокий сервис, большие раздевалки, просторные залы с естественным освещением, отличное кондиционирование, модный дизайн, чистота, уют и теплая домашняя атмосфера. Мы знаем своих гостей по имени! <br /> Вливайтесь в нашу дружную семью!</p>           
            <img className='icon_header ' src={iconHeaderMini} alt="gym" width='380px'/>
        </div>
    </div>
}


export default Header;