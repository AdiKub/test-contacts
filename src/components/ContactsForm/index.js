import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';

import './styles.scss';

const ContactsForm = () => {
  const dispatch = useDispatch()
  const [sort, isSort] = useState(false)
  
  useEffect(()=>{
    dispatch({type: 'SET_SORT_PARAM', title: sort}) // set to redux sort parameters for contacts list display
  })

  return (
    <div className='contacts-forms'>
      <button 
        onClick={()=> isSort(!sort)}  
        className='contacts-form-sort sort-alphabet'>
        {sort ? 'ALL' : 'A-Z'} 
      </button>
      <input
        onChange={(event)=>{
          dispatch({type: 'SET_SREACH_LATTERS', title: event.target.value})  // set to redux latters for search contact
        }}  
        placeholder='SEARCH' 
        className='contacts-form-search'>
      </input>
    </div>
  );
}

export default ContactsForm;