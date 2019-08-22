import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';

import ContactsForm from '../ContactsForm'
import ContactsList from '../ContactsList'


import './styles.scss';

const Contacts = () => {
  const [ready, isReady] = useState(false)
  //const reqParameter = useSelector(store=>store.params)
  //const dispatch = useDispatch()
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', 'http://localhost:8000/users')
  xmlhttp.send()

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      localStorage.setItem('contacts', xmlhttp.responseText)
      isReady(true)
      //dispatch({type: 'LET_RELOAD', title: ready})
    } else {
      console.log('error=' + xmlhttp.status);
    }
  }  
    return (
    <div className='constacts-container'>
      {ready ?
        <>
          <ContactsForm />
          <ContactsList />
        </> : 
        <h3>
          server didnt answer, please reload page
        </h3> 
      }
    </div>
  )
}

export default Contacts