import React from 'react'
import Navigation from '../components/Navigation'
import MessageForm from '../components/MessageForm'


export default class Messages extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        //action to send message 
    }

    render() {
        return (
            <div>
                <Navigation />
                <h5>You Matched on ... </h5>
                MessageForm Component
                <MessageForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


