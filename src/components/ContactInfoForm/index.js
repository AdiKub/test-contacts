import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactInfoForm = () => {
const inputNames = ['username', 'name', 'email', 'phone', 'website']
  return (
    <div className='contact-info-forms'>
      {inputNames.map(form=>
        <div key={form} className='contact-info-forms-form'>
         {form} 
        <input 
          type='text' 
          name={form} 
          className='contact-info-forms-form__input'>
        </input>
        </div>
        )}
    </div>
  );
}

export default ContactInfoForm;