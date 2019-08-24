import React from 'react'
import { useSelector } from 'react-redux';

import ContactDetail from '../components/ContactDetail'
import ContactEditForm from '../components/ContactEditForm'
import Contacts from '../components/Contacts'
import { requestMaker }  from '../api/index.js'



const HomePage = () => {
  const contacts = localStorage.getItem('contacts')
  const mode = useSelector(state => state.modeEdit)
  
  if (!contacts) {
    return(
      requestMaker()
    )
  } else {
    return (
      <div className='container'>
        <Contacts />
        {mode ?
        <ContactEditForm /> :
        <ContactDetail />}
      </div>
    )
  } 
}

export default HomePage
