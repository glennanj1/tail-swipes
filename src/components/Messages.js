import React from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'



export default class Messages extends React.Component {

    render() {
        return (
            <div className="messagePreview">
                <Link style={{color: 'inherit', textDecoration: 'none'}} to={{ pathname: `/messages/${this.props.name}`, state: { id: this.props.id, name: this.props.name, match: this.props.match }}} >
                    <div>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.message}</p>
                    </div>
                    <Image style={{width: '180px', height: '180px'}} src={this.props.image} roundedCircle />  
                </Link>  
            </div>
        )
    }
}