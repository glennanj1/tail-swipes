import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class ProfileContainer extends React.Component {

    loadProfiles = () => {
        return this.props.profiles.map(p =>
    

            <Card key={p.id} className='mx-auto' border='primary' style={{ width: '18rem'}}>
                <Card.Img className='mx-auto'  variant="top" src={p.attributes.image} />
                <Card.Body>
                    <Card.Title>{p.attributes.name}</Card.Title>
            
                    <Button variant="primary">Paw</Button>
                    
                    <Button variant="danger">No Paw</Button>
                </Card.Body>
            </Card>
        )}

    render() {
        return (
            <div>
                {this.loadProfiles()}
            </div>
        )
    }
}