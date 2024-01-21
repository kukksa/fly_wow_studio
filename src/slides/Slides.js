import { useState } from "react";
import { data } from "./dataSlides";
import arrowL from "../assets/icons8-double-left-64.png";
import arrowR from '../assets/icons8-double-right-64.png';
import "./Slides.css";



function Slides() {
    const [foto, setFoto] = useState(0);
    const {image} = data[foto];

    const previousFoto = () => {

        setFoto((foto => {
            foto--;
            if(foto < 0) {
            return data.length - 1;
        }
            return foto
        }))
    }
    const nextFoto = () => {
        setFoto((foto => {
            foto++;
            if(foto > data.length -1) {
            foto = 0
            }
            return foto
        }))
    }
    return <div>
        <div className="imagesSlide">
            <button className="btnSlide" onClick={previousFoto}><img className="iconSlide" src={arrowL} alt="" /></button>
            <img className="imageSlide" src={image} alt = "studio" width="90%" height="870px"/>
            <button className="btnSlide" onClick={nextFoto}><img className="iconSlide" src={arrowR} alt="arrow"/></button>
        </div>
    </div>
}

export default Slides;