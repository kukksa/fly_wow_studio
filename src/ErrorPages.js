import { Link } from "react-router-dom";
import errorPage from './assets/404.jpg'

function NotFound() {

    return(
        <div className="container_error">
            <h1 className="title_error">Упс! Такой страницы не существует!</h1>
            <Link className="link_error" to='/'>Нажми чтобы вернуться на главную</Link>
            <img className="icon_error" src={errorPage} alt="Error" width="650px" />
        </div>
    )
}

export default NotFound;