import './App.css';
import React from 'react';
import Park from './components/Park'
import Navigation from './components/Navigation'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageContainer from './containers/MessageContainer';
import ProfileContainer from './containers/ProfileContainer';
import Profile from './components/Profile';

const store = createStore( rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {

  render() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Navigation />
          <Route exact path="/" component={ProfileContainer} />
          <Route exact path="/messages" component={MessageContainer} />
          <Route exact path="/park" component={Park} />
        </Switch>
      </Router>
    </Provider>
  );
  }
}


