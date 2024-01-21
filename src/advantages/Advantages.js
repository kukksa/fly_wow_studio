import iconAdvGym from '../assets/iconAdvGym.jpg';
import iconAdvAcro from '../assets/iconAdvAcro.jpg';
import iconAdvSplit from '../assets/iconAdvSplit.jpg';
import iconAdvStar from '../assets/iconAdvStar.jpg';
import '../App.css';

function Advantages() {

    return <div>
            <hr />
            <h2 className='title_advantages'> Наши преимущества </h2>

        <div className="container_advantages">
            <div className='advantages'>
                <img className='icon_advantages' src={iconAdvGym} alt="gymnast" width='150px'/>
                <h2 className='about_advantages'>Уникальная программа</h2>
                <p className='text_about_advantages'>Сочетание координационных, силовых, аэробных упражнений и растяжки в одном занятии гармонично тренируют все группы мышц приносят быстрый результат и отличное настроение</p>
            </div>

            <div className='advantages'>
                <img className='icon_advantages' src={iconAdvAcro} alt="gymnast" width='150px'/>
                <h2 className='about_advantages'>Группы не более 8 человек</h2>
                <p className='text_about_advantages'>Групповые тренировки в небольших группах или персональные занятия позволяют тренеру найти индивидуальный подход к каждому.</p>
            </div>

            <div className='advantages'>
                <img className='icon_advantages' src={iconAdvSplit} alt="gymnast" width='150px'/>
                <h2 className='about_advantages'>Профессиональное оборудование</h2>
                <p className='text_about_advantages'>В нашей студии используется современное безопасное гимнастическое оборудование, позволяющее заниматься поситителям с любым уровнем подготовки.</p>
            </div>
            <div className='advantages'>
                <img className='icon_advantages' src={iconAdvStar} alt="gymnast" width='150px'/>
                <h2 className='about_advantages'>Соревнования</h2>
                <p className='text_about_advantages'>У вас будет уникальная возможность выступить на внутренних и внешних соревнованиях для того чтобы продемонстрировать свой результат и встать на пьедестал.</p>
            </div>
        </div>

    </div>
}

export default Advantages;