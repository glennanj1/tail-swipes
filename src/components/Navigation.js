import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect bg='primary' variant="dark" expand="sm">
              <Navbar.Brand  href="#home">Tail Swipes</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                    <Nav.Link  href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Parks</Nav.Link>
                    <Nav.Link href="#link">Matches</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}