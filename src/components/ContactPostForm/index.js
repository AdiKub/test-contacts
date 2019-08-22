import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactPostForm = () => {
  const postArray = ['sentence', 'sentences', 'paragraph']

  return (
    <div className='contact-post-forms'>
      {postArray.map(post=>
        <div 
          key={post}
          className='contact-post-forms-form'>
          {post}
          <textarea 
            name={post} 
            className='contact-post-forms-form__textarea' />
        </div>
        )}
      <div className='contact-post-forms-form'>
        words
        <div className='contact-post-forms-form-word'>
          <input className='contact-post-forms-form-word__input'  /> 
          <button className='contact-post-forms-form-word__button'> SAVE </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPostForm;