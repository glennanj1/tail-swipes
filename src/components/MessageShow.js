import React, { Component } from 'react'

export default class MessageShow extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt='profilePicture' />
                <h1>{this.props.name}</h1>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
