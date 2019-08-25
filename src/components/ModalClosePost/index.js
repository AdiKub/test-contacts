import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss'

Modal.setAppElement('#root')

const ModalClosePost =()=> {
  const dispatch = useDispatch()
  const modalIsOpen = useSelector(state => state.modalIsOpen)
  return (
    <Modal
      className='modal'
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
    >
      <h3 className='modal_text'> 
        do you want leave edit mode ? 
      </h3> 
      <div className='modal_button_wrapper'>
        <button 
          className='modal_button'
          onClick={()=>{
          dispatch({type: 'ENABLE_EDIT_MODE', title: false})
          dispatch({type: 'OPEN_THE_MODAL', title: false})}
          }>  YES
        </button>
        <button 
          className='modal_button'
          onClick={()=>
          dispatch({type: 'OPEN_THE_MODAL', title: false})
          }>  NO
        </button>
      </div>
  </Modal>
  )
}

export default ModalClosePost