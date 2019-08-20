import React from 'react';
//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactsList = (props) => {
  const { contacts } = props 
 
  return (
    <div className='contacts-list'>
      { contacts.map(cont =>
        <div key={cont.id} className='contacts-list-contact'>
          <span className='contacts-list-contact__name'>
              {cont.name}  
          </span>
        </div>
      )}
    </div>
  );
}

export default ContactsList;