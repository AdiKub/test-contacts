import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';

import './styles.scss';

const ContactsForm = () => {
  const dispatch = useDispatch()
  const [sort, isSort] = useState(false)
  
  useEffect(()=>{
    dispatch({type: 'SET_SORT_PARAM', title: sort})
  })

  return (
    <div className='contacts-forms'>
      <button onClick={()=> {
        isSort (!sort)
      }}
        className='contacts-form-sort sort-alphabet'>
        {sort ? 'ALL' : 'A-Z'} 
      </button>
      <input
        onChange={(event)=>{
          dispatch({type: 'SET_REACH_LATTERS', title: event.target.value})
        }}  
        placeholder='SEARCH' 
        className='contacts-form-search'>
      </input>
    </div>
  );
}

export default ContactsForm;