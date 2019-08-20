import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const ContactsForm = (props) => {
  const { contacts } = props 

  const onlyUnique = (value, index, self) => { 
    return self.indexOf(value) === index;
  }
  const latterArray = []
  
 

  contacts.map(cont => 
    latterArray.push(cont.name.charAt(0))
  )

  
  return (
    <form className='contacts-forms'>
      <button name='sort-alphabet' className='contacts-form-sort sort-alphabet'>
        A-Z
      </button>
      <select name='sort-letter' className='contacts-form-sort sort-letter'>
         <option value="ALL"> ALL </option>
          {latterArray.filter(onlyUnique).map(latter=>
            <option 
              key={latter} 
              value={latter}> {latter}
            </option>
            )}
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