import '../../App.css';
import Header from "./header/Header";
import Advantages from "./advantages/Advantages";
import Services from "./additionalServices/Services";
import Slides from "./slides/Slides";


function Home() {   

    return <div className='all_components'>
        <Header/>
        <Advantages/>
        <Slides/>
        <Services/>
    </div>    
}

export default Home;