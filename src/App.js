import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import burger from './assets/icons8-menu-30.png'

import News from './pages/news/News';
import Home from './pages/home/Home';
import Classes from './pages/classes/Classes';
import Schedule from './pages/schedule/Schedule';
import ContactUs from './pages//contacts/Contacts';
import Footer from './pages/home/footer/Footer.js';
import NotFound from './ErrorPages.js';
import Sale from './pages/news/Sale.js';
import Concert from './pages/news/Concert.js';


import { useState } from 'react';
import Estore from './pages/estore/eStore.js';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }
  
  return (
  <Router>
  <nav>
    <div className='nav2'>
      <button className='btn_menu' onClick={toggleMenu}><img src={burger} alt="burger" /></button>
    </div>
    <div className={`nav2_mobile ${isOpen ? 'is-open' : ''}`}>
      <Link to="/" className='logo_name'>FLY WOW! studio</Link>
      <Link to="news" className='link'>Новости</Link>
      <Link to="classes" className='link'>Направления </Link>   
      <Link to="schedule" className='link'>Расписание</Link>
      <Link to="estore" className='link'>Магазин</Link>
      <Link to="contacts" className='link'>Контакты</Link>      
    </div>
  </nav>

  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="*" element={<NotFound/>}/>
    <Route path="/news" element={<News/>}/>
    <Route path="/classes" element={<Classes/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
    <Route path="/contacts" element={<ContactUs/>}/>  
    <Route path="/estore" element={<Estore/>}/>  
    <Route path="/news/sale" element={<Sale/>}/> 
    <Route path="/news/concert" element={<Concert/>}/> 
  </Routes>
  <Footer/>
  </Router>
  )}

export default App;
