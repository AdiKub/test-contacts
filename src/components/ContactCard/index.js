import React, { useEffect } from 'react';
import { faHeart, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import ContactInfoForm from '../ContactInfoForm'
import ContactInfo from '../ContactInfo'

import './styles.scss';

const ContactCard = (props) => {
  const { contact } = props
  const mode = useSelector(state => state.modeEdit)
  const dispatch = useDispatch();

  useEffect(() => {
	
	})

  return (
    <div className='contact-card'>
      <div className='contact-card-intermedia'>
        <div className='contact-card-intermedia-image'>
          <img 
            src={contact.avatar} 
            alt='avatar' 
            className='contact-card-intermedia-image__avatar' />
        </div>
        <div className='contact-card-intermedia-buttons'>
          <button className='contact-card-intermedia-button'>
            <FontAwesomeIcon
              style={{color: contact.favorite && '#fc0741'}}
              className="contact-card-intermedia__icon"
              icon={faHeart}
            />
          </button>
          {!mode && <button
            onClick={()=>	dispatch({ type: 'ENABLE_EDIT_MODE', title: !mode })} 
            className='contact-card-intermedia-button'>
            <FontAwesomeIcon
              className="contact-card-intermedia__icon"
              icon={faEdit} 
            />
          </button> }
        </div>
      </div>
      {!mode ? <ContactInfo contact={contact}/> : 
              <ContactInfoForm />}
    </div>
  );
}

export default ContactCard;