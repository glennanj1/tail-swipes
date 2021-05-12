import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


export default class BottomNav extends React.Component{
    render(){
        return(
            <Navbar  fixed="bottom" variant="dark">
              <span>About Us</span>
            </Navbar>
        )
    }
}