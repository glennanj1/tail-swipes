import React, { Component } from 'react'
import { Image} from 'react-bootstrap'

export default class Conversations extends Component {
    render() {
        let cname;
        this.props.name === '' ? cname = 'messageRight' : cname = 'messageLeft'

        let name;
        this.props.name === '' ? name = 'You' : name = this.props.name
         
        return (
            <div className={cname}>
                <Image style={{position: 'relative', width: '60px', height: '60px'}} src={this.props.image} alt='picture' roundedCircle />
                <h4>{name}</h4>
                <h6>{this.props.chat}</h6>
            </div>
        )
    }
}
