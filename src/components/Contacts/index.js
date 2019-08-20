import React from 'react';

import ContactsForm from '../ContactsForm'
import ContactsList from '../ContactsList'
//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';
import contacts from '../../assets/contacts.json'

const Contacts = () => {

  return (
    <div className='constacts-container'>
      <ContactsForm contacts={contacts} />
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;