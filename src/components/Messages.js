import React from 'react'
import Image from 'react-bootstrap/Image'



export default class Messages extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.message}</p>
                </div>
                <Image src={this.props.image} roundedCircle />
                
            </div>
        )
    }
}