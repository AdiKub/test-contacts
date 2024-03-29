import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactPostForm = (props) => {
  const contact = useSelector(store=>store.contact)
  const mode = useSelector(state => state.modeEdit)
  const dispatch = useDispatch();
  const postArray = ['sentence', 'sentences', 'paragraph']
  const newPost = {}

  const onChangeInfoInput = (event) => { 
    event.target.name === 'words' ?
    newPost[event.target.name] = event.target.value.trim().split(" ") : // make array of words for words in post
    newPost[event.target.name] = event.target.value                      
  }

  const saveChanges = () => {  // save new contact with new informations and posts
    Object.keys(newPost).length > 0 && contact.posts.push(newPost)
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    const newContacts = contacts.filter(cont => cont.id !== contact.id) // delete old contact
    newContacts.push(contact)                                           // push new contact
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    dispatch({ type: 'ENABLE_EDIT_MODE', title: !mode })
  }

  return (
    <div className='contact-post-forms'>
      {postArray.map(post=>
        <div 
          key={post}
          className='contact-post-forms-form'>
          {post}
          <textarea 
            onChange={(event)=>onChangeInfoInput(event)}
            name={post} 
            className='contact-post-forms-form__textarea' 
          />
        </div>
        )}
      <div className='contact-post-forms-form'>
        words
        <div className='contact-post-forms-form-word'>
          <input 
            name='words' 
            onChange={(event)=>onChangeInfoInput(event)}
            className='contact-post-forms-form-word__input' /> 
          <button
            onClick={saveChanges} 
            className='contact-post-forms-form-word__button'> 
            SAVE 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPostForm;




