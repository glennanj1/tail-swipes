import React from 'react'
import Profile from '../components/Profile'
import { fetchProfiles } from '../actions/fetchProfiles'
import { createMessage } from '../actions/fetchMessages'
import { deleteProfile } from '../actions/fetchProfiles'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Navigation from '../components/Navigation'



class ProfileContainer extends React.Component {

    state = {
        isOpen: false
    };
    
    componentDidMount(){
        this.props.fetchProfiles()
    }

    loadProfiles = () => {
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '10vh', left: '50vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else if(this.props.data.length === 0) {
            return <h1>All out of matches check back later :D</h1>
        } else {
            console.log(this.props.data)
            return this.props.data.map(p => 
                <Profile 
                    key={p.id} 
                    id={p.id} 
                    name={p.attributes.name} 
                    image={p.attributes.image} 
                    match={p.attributes.match} 
                    onSwipe={this.onSwipe}
                    show={this.state.isOpen}
                    onHide={this.onHide}
                    closeModal={this.closeModal} />
        )}
    }
    onSwipe = (direction) => {
        if (direction === 'right' && this.props.match) {
            this.props.createMessage({ 
                message: {
                    name: this.props.name ,
                    message: this.props.message,
                    profile_id: this.props.id,
                    image: this.props.image
                }
            });
            this.props.deleteProfile(this.props.id);
            this.openModal();

        } else {
            this.props.deleteProfile(this.props.id);
        }
    }

    openModal = () => { 
        this.setState({ isOpen: true });
    }
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (<div>
                    <Navigation />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{position: 'absolute', marginTop: '15vh'}}>
                            {this.loadProfiles()}
                        </div>
                    </div>
                </div>   
        )}
}

const mapStateToProps = state => {
    return {
      data: state.profiles.profiles,
      loading: state.profiles.loading
    }
}
  
export default connect(mapStateToProps, { fetchProfiles, createMessage, deleteProfile })(ProfileContainer);