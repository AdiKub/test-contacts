import { createStore } from 'redux';

const INITIAL_STATE = {
  modeEdit: false,
  sort: false,
  contact: {},
  newPost: {},
  searchLatters: ''
}

const todoshka = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT_MODE':
      return { ...state, modeEdit: action.title };
    case 'SET_SORT_PARAM':
      return { ...state, sort: action.title }
    case 'SET_SELECTED_CONTACT':
      return { ...state, contact: action.title }
    case 'SET_INFO_FOR_CONTACT':
      return { ...state, changes: action.title }
    case 'SET_NEW_POST':
      return { ...state, newPost: action.title }
    case 'SET_REACH_LATTERS':
      return { ...state, searchLatters: action.title }
    default: 
      return state; 
  }
}

const store = createStore(todoshka);

export default store; 