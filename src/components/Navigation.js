import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'


export default class Navigation extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect bg='primary' variant="dark" expand="sm">
              <NavLink to='/' exact ><Navbar.Brand>TailSwipes</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                    <NavLink to='/messages' exact ><Nav.Link>Messages</Nav.Link></NavLink>
                    <NavLink to='/about' exact ><Nav.Link>About</Nav.Link></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}