import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';


const ContactsList = () => {
  const inputValue = 'Ann'
  const [selected, isSelected] = useState('')
  
  const regex = new RegExp((`\\b${inputValue}`, 'gi')) 
  console.log(regex)
  const contacts = JSON.parse(localStorage.getItem('contacts'))
  .filter(cont=> cont.name.search('')>=0 )
  .sort(
    // (a, b)=>{
    // if(a.name < b.name) { return -1; }
    // if(a.name > b.name) { return 1; }
    // return 0}
    )
  const dispatch = useDispatch()

  return (
    <div className='contacts-list'>
      {contacts.map(contact =>
        <div 
          onClick={(e)=>
            {dispatch({ type:'SET_SELECTED_CONTACT', title: contact }) 
            isSelected(contact.id)}
          }
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