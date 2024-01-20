import React from 'react';
import { useForm } from '@formspree/react';


function FormFooter() {

    const [state, handleSubmit] = useForm("xwkgpevg");
    if (state.succeeded) {
        return <p className='thanks_formFooter'>Спасибо! Мы обязательно свяжемся с вами!</p>;
    }
    
    return(
        <div id="subscribe">

            <h2 className='subscribe_formFooter'>Запишитесь на бесплатное пробное занятие:</h2>
    
        <form className='form_footer' onSubmit={handleSubmit}>
            <label htmlFor="department" className='label_formFooter'>
                    Интересующее направление
            </label>
            <select name="department" id="department" required="" className='select_formFooter'>
            <option 
                defaultValue=""
                value="" 
                disabled="">
                    Выберите
            </option>
            <option
                defaultValue="Воздушное кольцо">
                    Воздушное кольцо
            </option>
            <option
                defaultValue="Воздушные полотна">
                    Воздушные полотна
            </option>
            <option
                defaultValue="Растяжка">
                    Растяжка
            </option>
            <option
                defaultValue="Акробатика">
                    Акробатика
            </option>
            <option
                defaultValue="Exotic Pole">
                    Exotic Pole
            </option>
            <option
                defaultValue="Pole Sport">
                    Pole Sport
            </option>
            </select>

            <label htmlFor="telephone" className='label_formFooter'>
                Ваш номер телефона 
            </label>
            <input 
                className='input_formFooter'
                type="telephone"
                name="telephone"
                id="telephone"
                placeholder="(555) 555-5555">
            </input>
            
            <button className='btn_formFooter' type="submit" disabled={state.submitting}>
                Отправить
            </button>
        </form>
    </div>
    )
}

export default FormFooter;