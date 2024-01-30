import '../App.css';
import dataAdvantages from './dataAdvantages';
import Advantage from './Advantage';

function Advantages() {

    return <div>
            <hr />
            <h2 className='title_advantages'> Наши преимущества </h2>

            <div className="container_advantages">
                {dataAdvantages
                .map(advantage => <Advantage advantage={advantage} key={advantage.id}/>)}
            </div>

    </div>
}

export default Advantages;