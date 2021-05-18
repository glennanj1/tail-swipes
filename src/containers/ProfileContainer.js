import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import TinderCard from 'react-tinder-card'
import * as Icon from 'react-bootstrap-icons';



export default class ProfileContainer extends React.Component {

    loadProfiles = () => {
        
        const onSwipe = (direction) => {
            console.log('You swiped: ' + direction)
        }

        return this.props.profiles.map(p =>
            <TinderCard onSwipe={onSwipe} preventSwipe={['up', 'down']}>
                <Card key={p.id} className='mx-auto' border='primary' style={{ width: '18rem'}}>
                <Card.Img className='mx-auto'  variant="top" src={p.attributes.image} />
                <Card.Body>
                    <Card.Title>{p.attributes.name}</Card.Title>
            
                    <Button variant="primary">Paw</Button>

                    

                    <Button variant="danger">No Paw</Button>
                </Card.Body>
                </Card> 
            </TinderCard>
        )}

    render() {


        return (     
                <div>{this.loadProfiles()}</div>
        )
    }

    
}