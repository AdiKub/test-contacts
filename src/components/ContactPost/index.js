import React from 'react';

import { useSelector } from 'react-redux';
import ContactPostForm from '../ContactPostForm'
import './styles.scss';

const ContactPost = (props) => {
  const { contact } = props
  const mode = useSelector(state => state.modeEdit)

  return (
    <>
      { mode && <ContactPostForm /> }
      {contact.posts.map((post, index)=>
        <div key={post.sentence+index} className='contact-post'>
          <p className='contact-post__text'>{post.sentence}</p>
          <p className='contact-post__text'>{post.sentences}</p>
          <p className='contact-post__text'>{post.paragraph}</p>
          <div className='contact-post-tags'>
            {post.words.map((tag, index)=>
              tag && <div key={tag+index} className='contact-post-tags__tag'>
                       {tag}
                    </div>  
            )}
          </div>
          { mode && <button className='contact-post_delete__button'>DELETE</button>}
        </div>
      )}
    </>
  )
}

export default ContactPost;