import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './assets/styles/main.scss'
import Contacts from './components/Contacts'
import DetailContact from './components/DetailContact'

const App = () => {
  return ( 
    <Provider store={store}>
      <div className='container'>
        <Contacts />
        <DetailContact />
      </div>
    </Provider>
  );
}

export default App;
