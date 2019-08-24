import React from 'react';

import ContactsForm from '../ContactsForm'
import ContactsList from '../ContactsList'

import './styles.scss';

const Contacts = () => {
  return (
    <div className='contacts-container'>
      <ContactsForm />
      <ContactsList />
    </div>
  )
}

export default Contacts