import React from 'react'
import Profile from '../components/Profile'
import { fetchProfiles } from '../actions/fetchProfiles'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'



class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.fetchProfiles()
        console.log('fetching profiles')  
    }

    loadProfiles = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '10vh', left: '50vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else {
            return this.props.data.map(p => <Profile key={p.id} name={p.attributes.name} image={p.attributes.image} match={p.attributes.match} />
        )}
    }

    render() {
        return <div>{this.loadProfiles()}</div>
    }
}

const mapDispatchToProps = state => {
    return {
      data: state.profiles,
      loading: state.loading
    }
}
  
export default connect(mapDispatchToProps, { fetchProfiles })(ProfileContainer);