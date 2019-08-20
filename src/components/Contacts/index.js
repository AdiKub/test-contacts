import React from 'react';

import ContactsForm from '../ContactsForm'
import ContactsList from '../ContactsList'
//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const Contacts = () => {

  return (
    <div className='constacts-container'>
      <ContactsForm />
      <ContactsList />
    </div>
  );
}

export default Contacts;