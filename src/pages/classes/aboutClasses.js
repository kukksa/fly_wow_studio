import './Classes.css';

function AboutClasses ({aboutClasses, showTextClick}) {

    return(
        <div className="container_aboutClasses">
            {aboutClasses.map((element =>{
                const {id, name, image, description, level, dress, showMore} = element;
                return (<div className="class_card" key={id}>
                    <img className="icon_classes" src={image} alt="pic" width="300px" />
                    <div>
                    <h2 className="title_aboutClasses">{name}</h2>
                    <p className="text_aboutClasses">{showMore ? description : description.substring(0, 90) + '...'} 
                    <button className="btn_show_aboutClasses" onClick={() => showTextClick(element)}>{showMore ? 'Скрыть' : 'Читать польностью'}</button></p>
                    <p className="level_aboutClasses">{level}</p>
                    <p className="dress_aboutClasses">В чем будет удобно на занятиях: {dress}</p>                   
                    </div>
                </div>
                )
            }))}

        </div>
    )
}

export default AboutClasses;