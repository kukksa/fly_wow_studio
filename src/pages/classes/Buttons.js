import './Classes.css'

function Buttons({filteredClasses}) {

    return(<div className="container_classes ">
        <button className="change_buttons" onClick={() => filteredClasses(5)}>C 5 ЛЕТ</button>
        <button className="change_buttons" onClick={() => filteredClasses(7)}>C 7 ЛЕТ</button>
        <button className="change_buttons " onClick={() => filteredClasses(16)}>C 16 ЛЕТ</button>
    </div> 
    )
}

export default Buttons;