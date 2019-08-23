import React from 'react';

import ContactInteractive from '../ContactInteractive'
import ContactInfo from '../ContactInfo'

import './styles.scss';

const ContactCard = (props) => {
  const { contact } = props
  return (
    <div className='contact-card'>
      <ContactInteractive contact={contact} />
      <ContactInfo contact={contact}/>       
    </div>
  );
}

export default ContactCard;