import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';


const ContactsList = () => {
  const [selected, isSelected] = useState('')
  const searchLatters = useSelector(store=>store.searchLatters)
  const sort = useSelector(store=>store.sort)
  const regex = new RegExp(searchLatters, 'gi') 
  const contacts = JSON.parse(localStorage.getItem('contacts'))
  .filter(cont=> cont.name.search(regex)>=0 )
  .sort((a, b) => { 
    if (sort) { 
      if(a.name < b.name) { return -1;}
      if(a.name > b.name) { return 1; }
      return 0 
    } else {
      return (
        a.id-b.id
      )
    }
  })
  
  

  const dispatch = useDispatch()
  
  return (
    <div className='contacts-list'>
      {contacts.map(contact =>
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