import React from 'react';
import { useSelector } from 'react-redux';

import ContactCard from '../ContactCard'
import ContactPost from '../ContactPost'

import './styles.scss';

const DetailContact = () => {
  const contact = useSelector(store=>store.contact)
  if (contact) { 
  return (
    <div className='detail-contact-container'>
      <ContactCard contact={contact} />
      <ContactPost contact={contact} />
    </div>
  )} else {
    return (
      <h2>
         Select the contact
      </h2>    
    )
  };
}

export default DetailContact;