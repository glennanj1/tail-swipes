import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Park from './components/Park'
import Navigation from './components/Navigation'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageContainer from './containers/MessageContainer';


const store = createStore( rootReducer, applyMiddleware(thunk));
console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={App} />
        <Route exact path="/messages" component={MessageContainer} />
        <Route exact path="/park" component={Park} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


