import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';

import './styles.scss';

const ContactsForm = () => {
  const dispatch = useDispatch()
  const [param, setGetParam] = useState('')
  
  useEffect(()=> {
    dispatch( { type: 'SET_REQUEST_PARAM', title: param })
  })
  
  return (
    <div className='contacts-forms'>
      <button onClick={()=> 
        param ?  
        setGetParam('') : 
        setGetParam('?_sort=name')} 
        name='sort-alphabet' 
        className='contacts-form-sort sort-alphabet'>
        {param ?  
        'ALL' : 
        'A-Z'} 
      </button>
      <input 
        name='contacts-form-search' 
        placeholder='SEARCH' 
        className='contacts-form-search'>
      </input>
    </div>
  );
}

export default ContactsForm;