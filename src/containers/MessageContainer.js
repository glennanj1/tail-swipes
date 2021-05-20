import React from 'react'
import Messages from '../components/Messages'
import { fetchMessages } from '../actions/fetchMessages'
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'



class MessageContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchMessages()
        console.log('fetching messages')  
    }

    loadMessages = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '10vh', left: '50vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else {
            return this.props.data.map(d => <Messages name={d.attributes.name} /> 
        )}
    }

    render() {
        return <div>{this.loadMessages()}</div>
    }
    
}

const mapStateToProps = state => {
    return {
      data: state.messages.messages,
      loading: state.loading
    }
}
  
export default connect(mapStateToProps, { fetchMessages })(MessageContainer);