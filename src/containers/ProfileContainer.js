import React from 'react'
import Profile from '../components/Profile'
import { fetchProfiles } from '../actions/fetchProfiles'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Navigation from '../components/Navigation'
import Popup from "../components/Modal";
import TinderCard from 'react-tinder-card'



class ProfileContainer extends React.Component {
    
    state = {
        isOpen: false
      };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

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
            return this.props.data.map(p => 
            <TinderCard style={{position: 'absolute'}} onSwipe={this.onSwipe} preventSwipe={['up', 'down']}>
                <Profile key={p.id} name={p.attributes.name} image={p.attributes.image} match={p.attributes.match} />
            </TinderCard>
        )}
    }

    onSwipe = (direction) => {
        console.log(direction);
        if (direction === 'right' && this.props.match) {
            this.openModal();
        }
    }

    render() {
        return (<div>
                    <Navigation />
                    <Popup show={this.state.isOpen} onHide={this.closeModal} closeModal={this.closeModal}/>
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
  
export default connect(mapStateToProps, { fetchProfiles })(ProfileContainer);