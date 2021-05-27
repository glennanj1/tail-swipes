import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

export default class Popup extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show}>
                <Modal.Header closeButton>
                <Modal.Title>Match!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you matched with x!</Modal.Body>
                <Modal.Footer>
                <Link to="/messages/{this.props.name}" className="btn btn-primary">Message</Link>
                <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

