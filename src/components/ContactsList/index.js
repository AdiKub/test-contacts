import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';


const ContactsList = () => {
  const [selected, isSelected] = useState('')
  const contacts = JSON.parse(localStorage.getItem('contacts'))
  const dispatch = useDispatch()

  return (
    <div className='contacts-list'>
      {contacts.sort((a, b)=>a.id-b.id).map(contact =>
        <div 
          onClick={(e)=> {
            dispatch({ type:'SET_SELECTED_CONTACT', title: contact }) 
            isSelected(contact.id) 
          }}
          key={contact.id} 
          className={ selected === contact.id ? 
            'contacts-list-contact contacts-list-contact_selected' : 
            'contacts-list-contact' }>
          <span className='contacts-list-contact__name'>
            {contact.name}  
          </span>
        </div>
      )}
    </div>
  )
}

export default ContactsList;