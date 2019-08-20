import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactPost = (props) => {
  const { contacts } = props

  return (
    <>
      {contacts[0].posts.map((post, index)=>
        <div key={post.sentence+index} className='contact-post'>
          <p className='contact-post__text'>{post.sentence}</p>
          <p className='contact-post__text'>{post.sentences}</p>
          <p className='contact-post__text'>{post.paragraph}</p>
          <div className='contact-post-tags'>
            {post.words.map((tag, index)=>
              <div key={tag+index} className='contact-post-tags__tag'>
                  {tag}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ContactPost;