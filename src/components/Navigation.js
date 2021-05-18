import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


export default class Navigation extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect bg='primary' variant="dark" expand="sm">
              <Navbar.Brand as={Link} to='/' >TailSwipes</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link as={Link} to='/messages'>Messages</Nav.Link>
                        <Nav.Link as={Link} to='/park'>Park</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}