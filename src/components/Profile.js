import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'


class Profile extends Component {

    onSwipe = (direction) => {
        console.log(direction);
        if (direction === 'right' && this.props.match) {
            alert(`You matched with ${this.props.name}`);
        }
    }



    render() {
        return (
            <div style={{position: 'absolute', marginTop: '15vh'}}>
                <TinderCard style={{position: 'absolute'}} onSwipe={this.onSwipe} preventSwipe={['up', 'down']}>
                    <div style={{position: 'relative', maxWidth: '80vw'}}>
                        <Card style={{borderRadius: '20px'}}>
                            <Card.Img style={{borderRadius: '20px'}} variant="top" src={this.props.image} /> 
                            <Card.ImgOverlay>
                                <Card.Title style={{position: 'absolute', bottom: '0', color: 'white', fontSize: '50px'}} >{this.props.name}</Card.Title>
                            </Card.ImgOverlay>
                        </Card> 
                    </div>
                </TinderCard>
            </div>
        )}
}

export default Profile