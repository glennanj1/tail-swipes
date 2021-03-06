import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

//add api calls under messages to give random funny text

export default class MessageShow extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit} className="messageForm">
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Messages</Form.Label>
                    <Form.Control type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Enter Message" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        )
    }
}
