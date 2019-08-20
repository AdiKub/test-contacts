import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';
import ContactCard from '../ContactCard'
import DetailForm from '../DetailForm'
import ContactPost from '../ContactPost'
import contacts from '../../assets/contacts.json'
import './styles.scss';

const DetailContact = () => {

  return (
    <div className='detail-contact-container'>
      <ContactCard contacts={contacts} />
      <DetailForm />
      <ContactPost contacts={contacts}/>
    </div>
  );
}

export default DetailContact;