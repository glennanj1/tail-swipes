import React from 'react'
import Navigation from '../components/Navigation'

export default class Messages extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <h2>Nested Message</h2>
            </div>
        )
    }
}