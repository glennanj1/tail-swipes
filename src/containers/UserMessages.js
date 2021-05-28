import React from 'react'
import Navigation from '../components/Navigation'
import MessageShow from '../components/MessageShow'
import { connect } from 'react-redux'
import { fetchMessages } from '../actions/fetchMessages'

class Messages extends React.Component {

    componentDidMount(){
        debugger;
    }

    render() {
        return (
            <div>
                <Navigation />
                <h2>Message Show Page</h2>
                <MessageShow image={this.props.image} name={this.props.name} message={this.props.message} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      messages: state.messages.messages,
      loading: state.profiles.loading
    }
}

export default connect(mapStateToProps, { fetchMessages } )(Messages)