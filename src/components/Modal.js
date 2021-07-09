import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

export default class Popup extends Component {
    render() {
       
        return (
           
            <>
                <Modal show={this.props.show}>
                <Modal.Header closeButton>
                <Modal.Title>Match!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you matched with {this.props.name}!</Modal.Body>
                <Modal.Footer>
                <Link to={`/messages/`} className="btn btn-primary">Message</Link>
                <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }
}

