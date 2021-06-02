import React, { Component } from 'react'


export default class Conversations extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt='dog' />
                <div>
                    <h3>{this.props.name}</h3>
                    {this.props.chat}
                </div>
            </div>
        )
    }
}
