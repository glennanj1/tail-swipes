import React from 'react'
import Profile from '../components/Profile'
import { fetchProfiles } from '../actions/fetchProfiles'
import { connect } from 'react-redux';



class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.fetchProfiles()
        console.log('fetching profiles')  
      }

    loadProfiles = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return <div>Loading.....</div>
        } else {
        return this.props.data.map(p => <Profile id={p.id} name={p.attributes.name} image={p.attributes.image} />
        )}
    }

    render() {
        return  <div>{this.loadProfiles()}</div>
    }
}

const mapDispatchToProps = state => {
    return {
      data: state.profiles,
      loading: state.loading
    }
}
  
  export default connect(mapDispatchToProps, { fetchProfiles })(ProfileContainer);