import React from 'react';
import { faMobileAlt, faGlobeAmericas, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactInfo = (props) => {
  const { contacts } = props
  return (
    <div className='contact-info'>
      <h4 className='contact-info__username'>
        {contacts[0].username}
      </h4>
      <div className='contact-info-detail'>
        <span className='contact-info-detail-box__text__name'> {contacts[0].name} </span>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contacts[0].email} </span>
        </div>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faMobileAlt}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contacts[0].phone}</span>
        </div>
        <div className='contact-info-detail-box'>
          <p className="contact-info-detail-box__icon" >
            <FontAwesomeIcon
              icon={faGlobeAmericas}
            />
          </p>
          <span className='contact-info-detail-box__text'> {contacts[0].website} </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;