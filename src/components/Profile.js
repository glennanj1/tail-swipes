import { Component } from "react";
import Card from 'react-bootstrap/Card'


class Profile extends Component {
    render() {
        return (
                <div style={{position: 'relative', maxWidth: '80vw'}}>
                    <Card style={{borderRadius: '20px'}}>
                        <Card.Img style={{borderRadius: '20px'}} variant="top" src={this.props.image} /> 
                        <Card.ImgOverlay>
                            <Card.Title style={{position: 'absolute', bottom: '0', color: 'white', fontSize: '50px'}} >{this.props.name}</Card.Title>
                        </Card.ImgOverlay>
                    </Card> 
                </div>
                )}
}

export default Profile