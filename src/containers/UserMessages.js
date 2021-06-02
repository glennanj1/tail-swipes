import React from 'react'
import Navigation from '../components/Navigation'
import MessageForm from '../components/MessageForm'
import { fetchConversations, sendMessage } from '../actions/fetchConversations'
import { connect } from 'react-redux';
import Conversations from "../components/Conversations";
// import Spinner from 'react-bootstrap/Spinner'



class UserMessages extends React.Component {

    state = {
        value: ''
    }

    componentDidMount() {
        this.props.fetchConversations(this.props.location.state.id)
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.value)
        const data = {
                id: this.props.location.state.id,
                name: '',
                image: 'https://lh3.googleusercontent.com/ta9V5fRK0DJbs530IT4m01fr9Izn2Q5zYUnpO2IpLMMjp8y-p9jpAus2F516p9x8_TJ-o9oGYAt37Y8wQPk=w330-h440-rw',
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
        console.log(this.props.data)
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


