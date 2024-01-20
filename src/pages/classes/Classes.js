import { useState } from "react";
import { data } from "./dataClasses";
import Buttons from './Buttons';
import AboutClasses from "./aboutClasses";
import './Classes.css';


function Classes() {
    const [classes, setClasses] = useState(data);
    const [showText, setShowText] = useState(false);

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  const chosenClasses = (age) =>{
    const newClasses = data.filter(item => item.age <= age);
    setClasses(newClasses);
  }
    return <div>
      <div className='container_classes'>
        <h2 className='title_classes'>Выбери свое направление</h2>
      </div>
        <Buttons filteredClasses={chosenClasses}/>
        <AboutClasses aboutClasses={classes} showTextClick={showTextClick}/>
    </div>
  }

export default Classes;