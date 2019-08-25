import { createStore } from 'redux';

const INITIAL_STATE = {
  modeEdit: false,
  sort: false,
  contact: {},
  searchLatters: '',
  modalIsOpen: false,
}

const todoshka = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT_MODE':
      return { ...state, modeEdit: action.title };
    case 'SET_SORT_PARAM':
      return { ...state, sort: action.title }
    case 'SET_SELECTED_CONTACT':
      return { ...state, contact: action.title }
    case 'SET_SREACH_LATTERS':
      return { ...state, searchLatters: action.title }
    case 'OPEN_THE_MODAL':
      return { ...state, modalIsOpen: action.title }
    default: 
      return state; 
  }
}

const store = createStore(todoshka);

export default store; 