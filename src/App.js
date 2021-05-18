import './App.css';
import React from 'react';
import ProfileContainer from './containers/ProfileContainer'


export default class App extends React.Component {

  render() {
  return (
    <div className="App">
      <ProfileContainer />
    </div>
  );
  }
}


