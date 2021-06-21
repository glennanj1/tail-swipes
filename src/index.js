import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore( rootReducer, applyMiddleware(thunk));

export const url = 'https://top-sports-book-rails.herokuapp.com'

// console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


