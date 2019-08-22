import { createStore } from 'redux';

const INITIAL_STATE = {
  modeEdit: false,
  params: '',
  contact: false
}

const todoshka = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT_MODE':
      return { ...state, modeEdit: action.title };
    case 'SET_REQUEST_PARAM':
      return { ...state, params: action.title }
    case 'SET_SELECTED_CONTACT':
      return { ...state, contact: action.title }
    default: 
      return state; 
  }
}

const store = createStore(todoshka);

export default store; 