import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

const ContactPosts = () => {
  const contact = useSelector(store=>store.contact)
  const mode = useSelector(state => state.modeEdit)
  const [, setDeletedPost] = useState([{words: []}]) // this state is needed to reload component
  const dispatch = useDispatch();
  
  const deletePost = (index) => {
    setDeletedPost(contact.posts.splice(index, 1))
    dispatch({ type:'SET_SELECTED_CONTACT', title: contact }) // set contact without deleted post
  } 

  return (
    <>
      {contact.posts.map((post, index)=>
        <div key={post.sentence+index} className='contact-post'>
          <p className='contact-post__text'>{post.sentence}</p>
          <p className='contact-post__text'>{post.sentences}</p>
          <p className='contact-post__text'>{post.paragraph}</p>
          <div className='contact-post-tags'>
            {post.words && post.words.map((tag, index)=> tag && 
              <div key={tag+index} className='contact-post-tags__tag'>
                {tag}
              </div>  
            )}
          </div>
          { mode && // button will be enable if edit mode true
            <button 
              onClick={()=>deletePost(index)}
              id={index} 
              className='contact-post_delete__button'>
              DELETE
            </button> }
        </div>
      )}
    </>
  )
}

export default ContactPosts;