import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure'

export default class Places extends Component {
    render() {
        return (
            <>
                <Figure className='figureContainer'>
                    <Figure.Image
                        width={85}
                        height={90}
                        alt="figure"
                        src={this.props.photo}
                    />
                     <h1>{this.props.name}</h1>
                    <Figure.Caption>
                        <h3>Address: {this.props.vicinity}</h3>
                        <h4>Rating: {this.props.rating} Stars</h4>
                    </Figure.Caption>
                </Figure>
            </>
        )
    }
}
