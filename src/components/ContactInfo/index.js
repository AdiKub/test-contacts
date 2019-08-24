import React from 'react';
import { faMobileAlt, faGlobeAmericas, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import './styles.scss';

const ContactInfo = () => {
  const contact = useSelector(store=>store.contact)
  
  return (
    <div className='contact-info'>
      <h4 className='contact-info__username'>
        {contact.username}
      </h4>
      <div className='contact-info-detail'>
        <span className='contact-info-detail-box__text__name'> {contact.name} </span>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contact.email} </span>
        </div>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faMobileAlt}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contact.phone}</span>
        </div>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faGlobeAmericas}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contact.website} </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;