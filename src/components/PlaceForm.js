import React, { Component } from 'react'

export default class PlaceForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Zip Code</label>
                    <input onChange={this.props.onChange} value={this.props.value} type='text' placeholder='Example: 19128' />
                    <input type='submit' value='Submit' />
                </form>
                <h4 style={{color: 'red'}}>{this.props.zipError}</h4>
            </>
        )
    }
}
