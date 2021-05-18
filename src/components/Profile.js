import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'




class Profile extends Component {

    render() {
        return (
        <TinderCard  preventSwipe={['up', 'down']}>
                <Card key={this.props.id} className='mx-auto' border='primary' style={{ position: 'absolute', left: '50%', top: '50%'}}>
                <Card.Img className='mx-auto'  variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                    </Card.Body>
                </Card> 
        </TinderCard>
        )}
}

export default Profile