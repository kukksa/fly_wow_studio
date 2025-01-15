import Cart from './components/Cart/Cart';
import ClassesCategory from './components/ClassesComponents/ClassesCategory';
import AllCategories from './components/Filter/AllCategories';
import './eStore.css'


function Estore() {
    return (
    <div>      
        <h1>Начни тренировки уже сегодня</h1>

        <div className='container'>
            <AllCategories/>
            <Cart/>
        </div>     
            <ClassesCategory/>
        </div>
    );
}

export default Estore;