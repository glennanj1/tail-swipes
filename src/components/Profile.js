import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'
import Popup from "../components/Modal";

export default class Profile extends Component {

    render() {
        return (
                <div style={{position: 'relative', maxWidth: '80vw'}}>
                    <Popup name={this.props.name} show={this.props.isOpen} onHide={this.props.closeModal} closeModal={this.props.closeModal}/>
                    <TinderCard style={{position: 'absolute'}}  onSwipe={this.props.onSwipe} preventSwipe={['up', 'down']}>
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
  
