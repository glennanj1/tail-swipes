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
        <TinderCard  onSwipe={onSwipe} preventSwipe={['up', 'down']}>
                <Card className='mx-auto'  style={{ borderRadius: '20px', position: 'absolute', left: '50vh', right: "50vh", top: '10vh'}}>
                    <Card.Img className='mx-auto'  variant="top" src={this.props.image} style={{borderRadius: '20px'}}/> 
                    <Card.ImgOverlay>
                        <Card.Title style={{position: 'absolute', bottom: '0', color: 'white', fontSize: '50px'}} >{this.props.name}</Card.Title>
                    </Card.ImgOverlay>
                </Card> 
        </TinderCard>
        )}
}

export default Profile