import React from 'react'

import ContactInteractive from '../ContactInteractive'
import ContactInfoForm from '../ContactInfoForm'
import ContactPostForm from '../ContactPostForm'
import ContactPosts from '../ContactPosts'

const ContactEditForm = () => {
  return (
    <div className='detail-contact-container'>
      <div className='contact-card'>
        <ContactInteractive />
        <ContactInfoForm /> 
      </div>
      <ContactPostForm  />
      <ContactPosts  />
    </div>
  )
}
export default ContactEditForm;