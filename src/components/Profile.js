import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'


class Profile extends Component {

    render() {
        const onSwipe = (direction) => {
            console.log(direction);
            if (direction === 'right' && this.props.match) {
                alert(`You matched with ${this.props.name}`)
            }
        }
        return (
        <TinderCard style={{display: 'flex'}} onSwipe={onSwipe} preventSwipe={['up', 'down']}>
                <Card className='mx-auto'  style={{ position: 'absolute', borderRadius: '20px', maxWidth: '80vw'}}>
                    <Card.Img className='mx-auto'  variant="top" src={this.props.image} style={{borderRadius: '20px'}}/> 
                    <Card.ImgOverlay>
                        <Card.Title style={{position: 'absolute', bottom: '0', color: 'white', fontSize: '50px'}} >{this.props.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card> 
        </TinderCard>
        )}
}

export default Profile