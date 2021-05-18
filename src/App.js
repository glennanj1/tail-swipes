import './App.css';
import React from 'react';
import ProfileContainer from './containers/ProfileContainer'
import { fetchProfiles } from './actions/fetchProfiles'
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchProfiles()
    console.log('fetching profiles')
    
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ProfileContainer profiles={this.props.data} />
    }
  }


  render() {
  return (
    <div className="App">
      {this.handleLoading()}
    </div>
  );
  }
}

const mapDispatchToProps = state => {
  return {
    data: state.profiles,
    loading: state.loading

  }
}

export default connect(mapDispatchToProps, { fetchProfiles })(App);
