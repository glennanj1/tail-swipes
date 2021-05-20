import './App.css';
import React from 'react';
import Park from './components/Park'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageContainer from './containers/MessageContainer';
import ProfileContainer from './containers/ProfileContainer';
import UserMessages from './containers/UserMessages';


export default class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ProfileContainer} />
          <Route exact path="/messages" component={MessageContainer} />
          <Route exact path="/messages/:user" component={UserMessages} />
          <Route exact path="/park" component={Park} />
        </Switch>
      </Router>
    </div>
  );
  }
}


