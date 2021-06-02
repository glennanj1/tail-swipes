import React from 'react'
import Navigation from '../components/Navigation'
import MessageForm from '../components/MessageForm'


export default class Messages extends React.Component {

    

    handleSubmit = e => {
        e.preventDefault();
        //action to send message 
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Navigation />
                <h5>You Matched with {this.props.location.state.name} on {this.props.location.state.match}</h5>
                <p>Message From: </p>
                <MessageForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


