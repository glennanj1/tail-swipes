import React, { Component } from 'react'
import { Image} from 'react-bootstrap'

export default class Conversations extends Component {
    render() {
        let style;
        if (this.props.name === '') {
            style = {left: '0px'}
        } else {
            style = {right: '0px'}
        }
        return (
            <div style={style}>
                <Image style={{position: 'relative', width: '60px', height: '60px'}} src={this.props.image} alt='picture' roundedCircle />
                <p>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.chat}</p>
                </p>
            </div>
        )
    }
}
