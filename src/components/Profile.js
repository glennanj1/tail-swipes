import { Component } from "react";
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'
import Popup from "../components/Modal";
import { createMessage } from '../actions/fetchMessages'




class Profile extends Component {

    state = {
        isOpen: false
      };

    openModal = () => { console.log(this);
        this.setState({ isOpen: true });
    }
    closeModal = () => this.setState({ isOpen: false });


    onSwipe = (direction) => {
        console.log(direction);
        if (direction === 'right' && this.props.match) {
            console.log(this)
            this.props.createMessage({ 
                message: {
                    name: this.props.name ,
                    message: this.props.message,
                    profile_id: this.props.id,
                    image: this.props.image
                }
            });
            this.openModal();

        }
    }

    render() {
        return (
                <div style={{position: 'relative', maxWidth: '80vw'}}>
                    <Popup name={this.props.name} show={this.state.isOpen} onHide={this.closeModal} closeModal={this.closeModal}/>

                    <TinderCard style={{position: 'absolute'}}  onSwipe={this.onSwipe} preventSwipe={['up', 'down']}>
                        <Card style={{borderRadius: '20px'}}>
                            <Card.Img style={{borderRadius: '20px'}} variant="top" src={this.props.image} /> 
                            <Card.ImgOverlay>
                                <Card.Title style={{position: 'absolute', bottom: '0', color: 'white', fontSize: '50px'}} >{this.props.name}</Card.Title>
                            </Card.ImgOverlay>
                        </Card> 
                    </TinderCard>
                </div>
                )}
}
  
export default connect(null, { createMessage })(Profile);