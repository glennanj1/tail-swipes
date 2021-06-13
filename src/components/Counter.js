import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        value: '',
        counter: 0
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.value.length)
        this.setState({counter: this.state.counter + this.state.value.length})
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }


    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Counter</label>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <button type='submit' value='Submit'>Click Me!</button>
                </form>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}
