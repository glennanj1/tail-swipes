import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'


export default class Profile extends Component {

    render() {
        return (  
                <div style={{top: '25vh', position: 'absolute', borderRadius: '20px'}}>
                    <TinderCard  onSwipe={(dir) => this.props.onSwipe(dir, this.props)} preventSwipe={['up', 'down']}>
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
  
