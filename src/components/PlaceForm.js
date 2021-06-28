import React, { Component } from 'react'

export default class PlaceForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Zip Code</label>
                    <input onChange={this.props.onChange} value={this.props.value} type='text' placeholder='zipcode' />
                    <input type='submit' value='Submit' />
                </form>
                <h4 style={{color: 'red'}}>{this.props.zipError}</h4>
            </div>
        )
    }
}
