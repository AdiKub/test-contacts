import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

const ContactInfoForm = (props) => {
  const contact = useSelector(store=>store.contact)
  const inputNames = ['username', 'name', 'email', 'phone', 'website']
  
  const onChangeInfoInput = (event) => {
    contact[event.target.name] = event.target.value
  }
  
  return (
    <div className='contact-info-forms'>
      {inputNames.map(form=>
        <div key={form} className='contact-info-forms-form'>
         {form} 
        <input
          onChange={(event)=>onChangeInfoInput(event)}
          defaultValue={contact[form]}
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