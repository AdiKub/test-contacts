import React from 'react'
import { useSelector } from 'react-redux';

import ContactDetail from '../components/ContactDetail'
import ContactEditForm from '../components/ContactEditForm'
import Contacts from '../components/Contacts'
import ModalClosePost from '../components/ModalClosePost'
import { requestMaker }  from '../api/index.js'

const HomePage = () => {
  const contacts = localStorage.getItem('contacts')
  const mode = useSelector(state => state.modeEdit)  
  
  if (contacts) {    // if localStorage empty requestMaker do request to server
    return(
      <div className='container'>
        <Contacts />
        {mode ?     // this controller check editMode is enable or disable.
          <ContactEditForm /> :
          
          <ContactDetail />}
          <ModalClosePost />
    </div>
    )
  } else {
    return (
      requestMaker()
    )
  } 
}

export default HomePage
