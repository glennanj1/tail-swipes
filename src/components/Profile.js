import { Component } from "react";
import Card from 'react-bootstrap/Card'
import TinderCard from 'react-tinder-card'


class Profile extends Component {

    render() {
        return (
        <TinderCard  preventSwipe={['up', 'down']}>
                <Card key={this.props.id} className='mx-auto'  style={{ bg: 'blue !important', borderRadius: '20px', position: 'absolute', left: '50vh', right: "50vh", top: '10vh'}}>
                    <Card.Img className='mx-auto'  variant="top" src={this.props.image} style={{borderRadius: '20px'}}/> 
                </Card> 
        </TinderCard>
        )}
}

export default Profile