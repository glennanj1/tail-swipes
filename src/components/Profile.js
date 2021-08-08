import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'


export default class Profile extends Component {

    render() {
        return (  
                <div className='profileOuter'>
                    <TinderCard  onSwipe={(dir) => this.props.onSwipe(dir, this.props)} preventSwipe={['up', 'down']}>
                        <Card className='profileInner'>
                            <Card.Img className='cardImage' width="400" height="400" variant="top" src={this.props.image} /> 
                            <Card.ImgOverlay>
                                <Card.Title className='cardTitle'>{this.props.name}</Card.Title>
                            </Card.ImgOverlay>
                        </Card> 
                    </TinderCard>
                </div>
                )}
}
  
