import React, { Component } from 'react'

export default class Places extends Component {
    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
                <h3>{this.props.vicinity}</h3>
            </>
        )
    }
}
