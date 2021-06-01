import React from 'react'
import Messages from '../components/Messages'
import { fetchMessages } from '../actions/fetchMessages'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Navigation from '../components/Navigation'


class MessageContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchMessages()
    }

    loadMessages = () => {
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '10vh', left: '50vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else {
            return this.props.data.map(d => <Messages key={d.id} id={d.id} name={d.attributes.name} active={d.attributes.active} image={d.attributes.image} message={d.attributes.message} /> 
        )}
    }

    render() {
        return (
        <div>
            <Navigation />
            {this.loadMessages()}
        </div>)
    }
    
}

const mapStateToProps = state => {
    return {
      data: state.messages.messages,
      loading: state.messages.loading
    }
}
  
export default connect(mapStateToProps, { fetchMessages })(MessageContainer);