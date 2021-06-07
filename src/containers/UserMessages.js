import React from 'react'
import Navigation from '../components/Navigation'
import MessageForm from '../components/MessageForm'
import { fetchConversations, sendMessage } from '../actions/fetchConversations'
import { connect } from 'react-redux';
import Conversations from "../components/Conversations";




class UserMessages extends React.Component {

    state = {
        value: ''
    }

    componentDidMount() {
        this.props.fetchConversations(this.props.location.state.id)
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
                id: this.props.location.state.id,
                name: '',
                image: 'https://lh3.googleusercontent.com/fdmhHMBgpV2IJXwj2yl8i8XmOy-dRCdNv3arHeycRYMxtTMG5G7Jkuvzle5y3jF7rFxTcBxQGEPnVTUoSAYJ-lrVV2_CNXnOa9kqIE1tN_pZbx43FZOBqEULSrqY-tM2E9XakWvXRvE=w84',
                chat: this.state.value,
                message_id: this.props.location.state.id
        }
        
        this.props.sendMessage(data)

        this.setState({value: ''})
        
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    loadMessages = () => {
        return this.props.data.map(d => <Conversations key={d.id} name={d.attributes.name} image={d.attributes.image} chat={d.attributes.chat} />)
    }

    render() {
        return (
            <div>
                <Navigation />
                <h5>You Matched with {this.props.location.state.name} on {this.props.location.state.match}</h5>
                <p>{this.loadMessages()}</p>
                <MessageForm value={this.state.value} onChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state.conversations.conversations,
      loading: state.conversations.loading
    }
}
  
export default connect(mapStateToProps, { fetchConversations, sendMessage })(UserMessages);


