import iconHeaderMini from '../../../assets/Frame.png';
import iconHeaderMiniTwo from '../../../assets/Union.png';
import '../../../App.css';

import { useRef } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react"; 


function Header() {

    const container = useRef();
    const btn = useRef();
    const title = useRef();
    const iconFirst = useRef();
    const iconSecond = useRef();
    const textFirst = useRef();
    const textSecond = useRef();

    
    useGSAP(() => {
    gsap.from([btn.current, title.current,iconSecond.current], {
        zIndex: -1,
        x: 500,
        opacity: 0,
        duration: 2.2,
        delay: 0.3,
        ease: "power2.inOut",
    })
    
    gsap.from([textFirst.current,textSecond.current, iconFirst.current], {
        zIndex: -1,
        x: -500,
        opacity: 0,
        duration: 2.2,
        delay: 0.3,
        ease: "power2.inOut",
    })
    }, []);


    return <div className='container_header' ref={container}>

        <div className='content_header'>
            <img className='icon_header first' ref={iconFirst} src={iconHeaderMiniTwo} alt="gym" width='280px'/>
            
            <div className='title_header'>               
                <h1 className='title' ref={title}>Добро пожаловать к нам в студию</h1>
                <p className="text_title_header_first" ref={textFirst}>Мы предлагаем персональные и групповые занятия для детей и взрослых по направлениям: Pole Dance, Воздушные полотна, Воздушное кольцо, а также Стретчинг и Аэро-Йога.</p>
            </div>
        </div>

        <div className='container_subscribe_btn_header'>
            <button className='subscribe_btn_header' ref={btn} ><a href="#subscribe">Записаться на пробное занятие</a></button>
        </div>
        
        <div className= 'content_header'>       
            <p className="text_title_header_second" ref={textSecond}>К вашим услугам тренеры и инструкторы высокой квалификации, профессионалы и фанаты своего дела, доброжелательный персонал, высокий сервис, большие раздевалки, просторные залы с естественным освещением, отличное кондиционирование, модный дизайн, чистота, уют и теплая домашняя атмосфера. Мы знаем своих гостей по имени! <br /> Вливайтесь в нашу дружную семью!</p>           
            <img className='icon_header second' ref={iconSecond} src={iconHeaderMini} alt="gym" width='380px'/>
        </div>
    </div>
}


export default Header;