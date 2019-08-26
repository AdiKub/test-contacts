import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

const ContactsList = () => {
  const [selected, isSelected] = useState('')
  const dispatch = useDispatch()
  const searchLatters = useSelector(store=>store.searchLatters)
  const modeEdit = useSelector(store=>store.modeEdit)
  const sort = useSelector(store=>store.sort)
  const regex = new RegExp('^'+searchLatters, 'gi')

  const contacts = JSON.parse(localStorage.getItem('contacts'))  // filter() and sort() connected all time but parameters get from redux store
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

  return (
    <div className='contacts-list'>
      {contacts.map(contact =>
        <div onClick={()=> modeEdit ?  // if Edit mode true and will try set new contact, will be enable modal for validation to action
              dispatch({ type:'OPEN_THE_MODAL', title: true }) : 
            (
              dispatch({ type:'SET_SELECTED_CONTACT', title: contact }),
              isSelected(contact.id)
            )
          }
          key={contact.id} 
          className={ selected === contact.id ? 
            'contacts-list-contact contacts-list-contact_selected' : 
            'contacts-list-contact' }>
          <span className='contacts-list-contact__name'>
            {contact.name}  
          </span>
          <button className='contacts-list-exit_button'>
          </button>
        </div>
      )}
    </div>
  )
}

export default ContactsList;