import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactsForm = () => {

  return (
    <form className='contacts-forms'>
      <button name='sort-alphabet' className='contacts-form-sort sort-alphabet'>
        a-z
      </button>
      <select name='sort-letter' className='contacts-form-sort sort-letter'>
         <option value="ALL">all</option>
         <option value="a">a</option>
         <option value="b">b</option>
         <option value="c">c</option>
         <option value="d">d</option>
      </select>
      <input 
        name='contacts-form-search' 
        placeholder='SEARCH' 
        className='contacts-form-search'>
      </input>
    </form>
  );
}

export default ContactsForm;