import React from 'react'
import { faHeart, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

const ContactInteractive = (props) => {
  const contact = useSelector(store=>store.contact)
  const mode = useSelector(state => state.modeEdit)
  const dispatch = useDispatch();

  return (
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
            style={{ color: contact.favorite && '#fc0741' }}
            className="contact-card-intermedia__icon"
            icon={faHeart}
          />
        </button>
        {!mode && <button
          onClick={() => dispatch({ type: 'ENABLE_EDIT_MODE', title: !mode })}
          className='contact-card-intermedia-button'>
          <FontAwesomeIcon
            className="contact-card-intermedia__icon"
            icon={faEdit}
          />
        </button>}
      </div>
    </div>
  )
}

export default ContactInteractive


