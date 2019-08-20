import React from 'react';
import { faHeart, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { useSelector, useDispatch } from 'react-redux';
import ContactInfo from '../ContactInfo'

import './styles.scss';

const ContactCard = (props) => {
  const { contacts } = props
  return (
    <div className='contact-card'>
      <div className='contact-card-intermedia'>
        <div className='contact-card-intermedia-image'>
          <img 
            src={contacts[0].avatar} 
            alt='avatar' 
            className='contact-card-intermedia-image__avatar' />
        </div>
        <div className='contact-card-intermedia-buttons'>
          <button className='contact-card-intermedia-button'>
            <FontAwesomeIcon
              style={{color: contacts[0].favorite && '#CC4852'}}
              className="contact-card-intermedia__icon"
              icon={faHeart}
            />
          </button>
          <button className='contact-card-intermedia-button'>
            <FontAwesomeIcon
              className="contact-card-intermedia__icon"
              icon={faEdit} 
            />
          </button>
        </div>
      </div>
      <ContactInfo contacts={contacts}/>
    </div>
  );
}

export default ContactCard;