import React, { Component } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

export default class Conversations extends Component {
    render() {
        return (
            <div style={{marginBottom: '200pt'}}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src='https://placedog.net/85/90?random' roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <div>
                    <h3>{this.props.name}</h3>
                    {this.props.chat}
                </div>
            </div>
        )
    }
}
