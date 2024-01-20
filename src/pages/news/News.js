import './News.css';
import { useState } from 'react';

import Modal from './Modal';
import Content from './Content';


function News() {

const [isOpen, setIsOpen] = useState(false);

    return <div className='container_news'>        
                <div className="first_news">
                    <p className='first_januar_news'>только в ЯНВАРЕ</p>
                    <h2 className='first_text_news'>Второй абонемент за полцены</h2>       
                    <button className='btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button>
                    {isOpen && 
                    <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen}/>
                    </Modal>
                    }           
                </div>
        
                <div className="second_news">
                    <h2 className='second_text_news'>Занимайся всей семьей с выгодой</h2>
                    <h2 className='second_text_news'>Скидка 15% на абонементы</h2>
                    <button className='btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button>
                    {isOpen && 
                    <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen}/>
                    </Modal>
                    }
                </div>
        
                <div className="third_news">
                    <h2 className='trial_news'>Пробное занятие БЕСПЛАТНО</h2>
                    <button className='trial_btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button>
                    {isOpen && 
                    <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen}/>
                    </Modal>
                    }
                </div>

                <div className="fouth_news">
                    <h2 className='fouth_children_news'>Безлимитный детский абонемент ВЫГОДНО</h2>
                    <button className='fouth_btn_news' onClick={() => setIsOpen(true)}>Узнать больше </button>
                    {isOpen && 
                    <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen}/>
                    </Modal>
                    }     
                </div>
            </div>
    }

export default News;