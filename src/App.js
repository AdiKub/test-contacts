import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './assets/styles/main.scss'
import HomePage from './pages/HomePage'

const App = () => {
  return ( 
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
