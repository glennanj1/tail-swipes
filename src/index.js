import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Messages from './components/Messages'
import About from './components/About'
import Navigation from './components/Navigation'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import profileReducer from './reducers/profileReducer'
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(profileReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={App} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/about" component={About} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


