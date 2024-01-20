import './Schedule.css'

function Table() {
    return (
    <div className='table'>
        <table>
            <thead>
                <tr className='days'>   
                    <th></th>
                    <th>Понедельник</th>
                    <th>Вторник</th>
                    <th>Среда</th>
                    <th>Четверг</th>
                    <th>Пятница</th>
                    <th>Суббота</th>
                    <th>Воскресенье</th>
                </tr>
            </thead>
        <tbody>
                <tr>
                    <td className='time'>10:00</td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='overlay_poleStart'>
                            <p>Pole-Acro начинающие</p>
                            <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_poleMidle'>
                            <p>Pole-Acro база</p>
                            <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div>  
                    </td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>11:00</td>
                    <td>
                        <div className='overlay_poleMidle'>
                            <p>Pole-Acro база</p>
                            <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div>                       
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className='overlay_poleStart'>
                            <p>Pole-Acro начинающие</p>
                            <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>12:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>13:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>14:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>15:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>16:00</td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                        <div className='overlay_acro'>
                            <p>Акробатика</p>
                            <p>тренер: Arno Sein <br /> зал 2</p>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога дети</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога дети</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>17:00</td>
                    <td>
                        <div className='overlay_silkStart'> 
                            <p>Воздушные полотна начинающие</p>
                            <p>тренер: Eva Trofimova <br /> зал 5</p>
                        </div>
                        <div className='overlay_poleMidle'>
                            <p>Pole-Acro база</p>
                            <p>тренер: Kristina Polevaya <br /> зал 3</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_hoopProfi'>
                            <p>Воздушные кольца профи</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                        <div className='overlay_acro'>
                            <p>Акробатика</p>
                            <p>тренер: Arno Sein <br /> зал 2</p>
                        </div></td>
                    <td>
                        <div className='overlay_hoopProfi'>
                            <p>Воздушные кольца профи</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='overlay_hoopMidle'>
                            <p>Воздушные кольца средний уровень</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='time'>18:00</td>
                    <td>
                        <div className='overlay_silkProfi'>
                            <p>Воздушные полотна профи</p>
                            <p>тренер: Eva Trofimova <br /> зал 5</p>
                        </div>
                    </td>
                    <td>
                        <div className='.overlay_hoopStart'>
                            <p>Воздушные кольца начинающие</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                        <div className='overlay_silkProfi'>
                            <p>Воздушные полотна профи</p>
                            <p>тренер: Eva Trofimova <br /> зал 2</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_silkStart'> 
                            <p>Воздушные полотна начинающие</p>
                            <p>тренер: Eva Trofimova <br /> зал 5</p>
                        </div>
                        <div className='overlay_poleMidle'>
                            <p>Pole-Acro база</p>
                            <p>тренер: Kristina Polevaya <br /> зал 3</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_silkProfi'>
                            <p>Воздушные полотна профи</p>
                            <p>тренер: Eva Trofimova <br /> зал 2</p>
                        </div>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='.overlay_hoopStart'>
                            <p>Воздушные кольца начинающие</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                        <div className='overlay_exotic'>
                            <p>Exotic-Pole</p>
                            <p>тренер: Kristina Polevaya <br /> зал 3</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='time'>19:00</td>
                    <td>
                        <div className='overlay_exotic'>
                            <p>Exotic-Pole</p>
                            <p>тренер: Kristina Polevaya <br /> зал 3</p>
                        </div>
                        <div className='overlay_yoga'>
                            <p>Аэро-Йога</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='overlay_poleStart'>
                        <p>Pole-Acro начинающие</p>
                        <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_hoopMidle'>
                            <p>Воздушные кольца средний уровень</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                    </td>
                    <td>
                        <div className='overlay_acro'>
                            <p>Акробатика</p>
                            <p>тренер: Arno Sein <br /> зал 2</p>
                        </div>
                        
                        </td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Kristina Polevaya <br />зал 1</p>
                        </div>
                        <div className='overlay_hoopProfi'>
                            <p>Воздушные кольца профи</p>
                            <p>тренер: Daria Leonova <br />зал 5</p>  
                        </div>
                        </td>
                    <td></td>
                    <td>
                        <div className='overlay_acro'>
                            <p>Акробатика</p>
                            <p>тренер: Arno Sein <br /> зал 2</p>
                        </div>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Daria Leonova<br />зал 1</p>
                        </div>
                        </td>
                </tr>
                <tr>
                    <td className='time'>20:00</td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className='overlay_exotic'>
                            <p>Exotic-Pole</p>
                            <p>тренер: Kristina Polevaya <br /> зал 3</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_stretch'>
                            <p>Стретчинг</p>
                            <p>тренер: Daria Leonova<br />зал 1</p>
                        </div>
                    </td>
                    <td>
                        <div className='overlay_poleStart'>
                            <p>Pole-Acro начинающие</p>
                            <p>тренер: Kristina Polevaya <br />зал 3</p>
                        </div>

                    </td>
                    <td></td>
                    <td></td>
                </tr>

        </tbody>
        </table>
        </div>

)
}
export default Table;