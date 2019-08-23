import React from 'react'
import { useSelector } from 'react-redux';

import ContactInteractive from '../ContactInteractive'
import ContactInfoForm from '../ContactInfoForm'
import ContactPostForm from '../ContactPostForm'
import ContactPost from '../ContactPost'

const ContactEditForm = () => {
  return (
    <div className='detail-contact-container'>
      <div className='contact-card'>
        <ContactInteractive />
        <ContactInfoForm /> 
      </div>
      <ContactPostForm  />
      <ContactPost  />
    </div>
  )
}
export default ContactEditForm;