import React from 'react'
import Profile from '../components/Profile'
import { fetchProfiles } from '../actions/fetchProfiles'
import { createMessage } from '../actions/fetchMessages'
import { deleteProfile } from '../actions/fetchProfiles'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Navigation from '../components/Navigation'
import Popup from "../components/Modal";



class ProfileContainer extends React.Component {

    state = {
        isOpen: false,
        name: ''
    };
    
    componentDidMount(){
        this.props.fetchProfiles()
    }

    loadProfiles = () => {
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '25vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else if(this.props.data.length === 0) {
            return (
            <div>
                <h1>All out of matches check back later :D</h1>
                <Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '25vh'}}>
                        <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
            )} else {
            return this.props.data.map(p => 
                <Profile 
                    key={p.id} 
                    id={p.id} 
                    name={p.attributes.name} 
                    image={p.attributes.image} 
                    match={p.attributes.match} 
                    onSwipe={this.onSwipe}
                     />
        )}
    }
    
    onSwipe = (direction, props) => {
        if (direction === 'right' && props.match) { 
            
            this.props.createMessage({ 
                message: {
                    name: props.name ,
                    initial_message: props.initial_message,
                    profile_id: props.id,
                    image: props.image
                }
            });
            this.openModal(props.name);
            this.props.deleteProfile(props.id)


        } else {
            this.props.deleteProfile(props.id)
        }
    }

    openModal = (name) => { 
        this.setState({ isOpen: true });
        this.setState({ name: name})
    }

    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (<div>
                    <Navigation />
                    <Popup name={this.state.name} show={this.state.isOpen} onHide={this.closeModal} closeModal={this.closeModal}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {this.loadProfiles()}
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