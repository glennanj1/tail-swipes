import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageContainer from './containers/MessageContainer';
import ProfileContainer from './containers/ProfileContainer';
import UserMessages from './containers/UserMessages';
import PlaceContainer from './containers/PlaceContainer'
import Counter from './components/Counter'

export default class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ProfileContainer} />
          <Route exact path="/messages" component={MessageContainer} />
          <Route exact path="/messages/:user" component={UserMessages} />
          <Route exact path="/park" component={PlaceContainer} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </Router>
      <footer id="footer" className="text-center text-lg-start bg-light text-muted">
      <div class="text-center p-4 text-dark">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://johng.netlify.app/">John Glennan</a>
      </div>
    </footer>
    </div>
  );
  }
}


