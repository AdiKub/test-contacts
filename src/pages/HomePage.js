import React from 'react'
import { useSelector } from 'react-redux';

import ContactDetail from '../components/ContactDetail'
import ContactEditForm from '../components/ContactEditForm'
import Contacts from '../components/Contacts'

const HomePage = () => {
  const contacts = localStorage.getItem('contacts')
  const mode = useSelector(state => state.modeEdit)
  if (!contacts) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'http://localhost:8000/users')
    xmlhttp.send()
  
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        localStorage.setItem('contacts', xmlhttp.responseText)
        window.location.reload()
      } 
    } 
    return (
      <h1>
        SERVER ERROR
      </h1>
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
