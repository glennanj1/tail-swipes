import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Oz from './oz.png'

export default class ProfileContainer extends React.Component {

    render() {
        return (
            <Card className='mx-auto' border='primary' style={{ width: '18rem'}}>
                <Card.Img className='img-thumbnail'  variant="top" src={Oz} />
                <Card.Body>
                    <Spinner animation="border" variant="alert" />
                    <Card.Title>Ozzy</Card.Title>
                    <Card.Text>
                        Love long trips in the Car. Like barking at other dogs. Big parks are my favorite!
                    </Card.Text>
                    <Button variant="primary">Paw</Button>{' '}
                    <Button variant="danger">No Paw</Button>
                </Card.Body>
             </Card>
        )
    }
}