import './News.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';
import Content from './Content';

import yogaNews from '../../assets/yogaNews.jpg';
import stretchNews from  '../../assets/stretchNews.jpg';
import competitionNews from '../../assets/competitionNews.jpg';
import christmasNews from '../../assets/christmasNews.jpg';
import infoNews from '../../assets/infoNews.jpg';
import childNews from '../../assets/childNews.jpg';
import trainingNews from '../../assets/trainingNews.jpg';


function News() {

const [isOpen, setIsOpen] = useState(false);

    return <div>

    <h2 className='our_news'>Новости нашей студии</h2>
        <div className='container_news'>  

            <div className='all_news'>
                <h3 className='title_news'>2.01.2025 <br /> Второй абонемент за полцены</h3>                    
                    <div className='news'>
                        <img className="img_news" src={yogaNews} alt="photo_news" width="300px" />                  
                            <div className="content_news">
                                <p className='text_news'>Только в ЯНВАРЕ, покупая один абонемент, второй вы можете приобрести со скидкой 50%</p>     
                                <Link to={`/news/sale`}>
                                    <button className='btn_news'>Узнать больше </button>
                                </Link>
                            </div>
                    </div>          
            </div>

            <div className='all_news'>
                <h3 className='title_news'>7.12.2024 <br /> Отчетный концерт студии</h3>                    
                    <div className='news'>
                        <img className="img_news" src={competitionNews} alt="photo_news" width="300px" height="190px" />                  
                            <div className="content_news">
                                <p className='text_news'>27 декабря состоится отчетный концерт студии</p>     
                                <Link to={`/news/concert`}>
                                    <button className='btn_news'>Подробнее</button>
                                </Link>
                            </div>
                    </div>          
            </div>

            <div className='all_news'>
                <h3 className='title_news'>1.12.2024 <br /> График работы студии в декабре и январе</h3>                    
                    <div className='news'>
                        <img className="img_news" src={christmasNews} alt="photo_news" width="300px" height="190px" />                  
                            <div className="content_news">
                                <p className='text_news'>Студия не работает: </p>
                                <p className='text_news'>23.12.2024 <br /> 24.12.2024 <br /> 25.12.2024 <br /> 31.12.2024 <br /> 1.01.2025 <br /> В другие дни работа студии согласно расписанию</p>     
                            </div>
                    </div>          
            </div>
        
            <div className='all_news'>
                <h3 className='title_news'>11.11.2024 <br /> Занимайся всей семьей с выгодой</h3>
                    <div className='news'>
                        <img className="img_news" src={stretchNews} alt="photo_news" width="300px" height="190px" />
                            <div className="content_news">
                                <p className='text_news'>Скидка 15% на абонементы</p>
                                <button className='btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button> 
                                {isOpen && 
                                <Modal setIsOpen={setIsOpen}>
                                <Content setIsOpen={setIsOpen}/>
                                </Modal>
                                }                
                            </div>
                    </div>
            </div>

            <div className='all_news'>
                <h3 className='title_news'>15.09.2024 <br /> Открываем новые группы</h3>                    
                    <div className='news'>
                        <img className="img_news" src={infoNews} alt="photo_news" width="300px" height="190px"/>                  
                            <div className="content_news">
                                <p className='text_news'>С 1 октября доступны новые группы для начинающих: </p> 
                                <p className='text_news'> Pole Acro (тренер Kristina Polevaya) <br /> Воздушные полотна (тренер Eva Trofimova)</p> 
                                <Link to={`/schedule`}>
                                    <button className='btn_news'>Посмотреть расписание </button>    
                                </Link>
                            </div>
                    </div>          
            </div>
        
            <div className='all_news'>
                <h3 className='title_news'>27.08.2024 <br /> Пробное занятие БЕСПЛАТНО</h3>
                    <div className='news'>
                        <img className="img_news" src={trainingNews} alt="photo_news" width="300px" height="190px"/>  
                            <div className="content_news">
                                <p className='text_news'>Первое занятие по любому направлению в нашей студии АБСОЛЮТНО БЕСПЛАТНО</p>
                                <button className='btn_news'><a href="#subscribe">Записаться</a></button>                   
                            </div>
                    </div>
            </div>

            <div className='all_news'>
                <h3 className='title_news'>30.06.2024 <br />Безлимитный детский абонемент ВЫГОДНО</h3>
                    <div className='news'>
                        <img className="img_news" src={childNews} alt="photo_news" width="300px" height="190px"/> 
                            <div className="content_news">
                                <p className='text_news'>Предложение действует только в июле и августе</p>
                                <button className='btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button>
                                {isOpen && 
                                <Modal setIsOpen={setIsOpen}>
                                <Content setIsOpen={setIsOpen}/>
                                </Modal>
                                }     
                            </div>
                    </div> 
            </div>
        </div>
    </div>
            
            
    }

export default News;