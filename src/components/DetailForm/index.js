import React from 'react';

//import { useSelector, useDispatch } from 'react-redux';
import ContactPostForm from '../ContactPostForm'
import ContactInfoForm from '../ContactInfoForm'
import './styles.scss';

const DetailForm = () => {

  return (
    <div className='detail-form'>
      <ContactInfoForm />
      <ContactPostForm />
    </div>
  );
}

export default DetailForm;