import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contacts.css'


function ContactForm() {

  const [state, handleSubmit] = useForm("xjvnvdvy");
  if (state.succeeded) {
      return <p className='thanks_formContacts'>Спасибо! Мы обязательно свяжемся с вами!</p>;
  }

  return (
      <form className='form_contacts' onSubmit={handleSubmit}>

      <label htmlFor="full-name" className='label_formContacts'>
        Ваше Имя
      </label>
      <input
        className='input_formContacts'
        type="text"
        name="name"
        id="full-name"
        placeholder="Имя" 
        required="">
        </input>
      <label htmlFor="email" className='label_formContacts'>
        Адрес электронной почты
      </label>
      <input
        className='input_formContacts'
        id="email"
        type="email" 
        name="email"
        placeholder="E-mail"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="telephone" className='label_formContacts'>
        Ваш номер телефона 
      </label>
      <input 
        className='input_formContacts'
        type="telephone"
        name="telephone"
        id="telephone"
        placeholder="(555) 555-5555">
      </input>

      <label htmlFor="department" className='label_formContacts'>
        Интересующее направление
      </label>
      <select name="department" id="department" required="" className='select_formContacts'>
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

      <textarea
        className='textarea_formContacts'
        rows="5"
        id="message"
        name="message"
        placeholder="Дополнительная информация"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn_formContacts' type="submit" disabled={state.submitting}>
        Отправить
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;