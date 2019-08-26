import React from 'react';
import { useSelector } from 'react-redux';

import ContactCard from '../ContactCard'
import ContactPosts from '../ContactPosts'

import './styles.scss';

const DetailContact = () => {
  const contact = useSelector(store=>store.contact)
  if (Object.keys(contact).length>0) {    // enable ContactCard and ContactPosts components if contact was set to redux
  return (
    <div className='detail-contact-container'>
      <ContactCard />
      <ContactPosts />
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