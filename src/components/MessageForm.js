import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class MessageShow extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit} style={{position: 'fixed', width: '100vw', bottom: '0pt'}}>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Messages</Form.Label>
                    <Form.Control type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Enter Message" />
                    <Form.Text className="text-muted">
                    example catch phrase here
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        )
    }
}
