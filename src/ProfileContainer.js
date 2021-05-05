import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Oz from './ozzy_lick.png'

export default class ProfileContainer extends React.Component {

    render() {
        return (
            <Card className='mx-auto' border='primary' style={{ width: '18rem'}}>
                <Card.Img className='mx-auto'  variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        <h2>{this.props.info}</h2>
                    </Card.Text>
                    <Button variant="primary">Paw</Button><br />
                    <Button variant="danger">No Paw</Button>
                </Card.Body>
             </Card>
        )
    }
}