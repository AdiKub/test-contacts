import React from 'react';

import ContactInteractive from '../ContactInteractive'
import ContactInfo from '../ContactInfo'

import './styles.scss';

const ContactCard = () => {
  return (
    <div className='contact-card'>
      <ContactInteractive  />
      <ContactInfo />       
    </div>
  );
}

export default ContactCard;