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
                name: 'me',
                image: 'https://lh3.googleusercontent.com/fife/ABSRlIrR0M6TjKaKGrMYp2vhPmjCXKbYm8pZMTKxCwz7ca_jC-Dvxun9H7g_GHKcna4fjqcSASKeqWCF4SPd7wy0MiEtYoFzpApxDXgf99qEWu5y2VfMAPv6giGIGqCFH390lbiC39umKu2hhbiQnoaQ_zGWr61L9T5XEUGETtTOYV-RZXGYla9bt_2hlNHQzvFUSjJ4cGANoNq4PXUhfG1xQwaXX-UB8pz6WOX_GTTi_FthBG9AnhetEFzyNDhryQW6_juNTvOECIBRJqFDVIk0a0lK3NXOoeJQhuzWh_ZAFjFKfnaG1AXa5ZmiVUZfkg3l8XLkEXI8jz9p6t-F16qQcV29TbItvrzQVcNKSIM8yh2BznmuBKOIhpZCPQ9FnFfxSFhidRvzI59mpEFnHf_4h-krGmIP9mkyzgM_aY0rmvg0MGcdIDZqPGVYpbf9eo4HDXtoj7gt_ipy8A4nqeBV-y7FXAoiCKjGfT9yc0dj899YqXz2sJizxjsKfPyw20wCqxPYiZy7J5WLFwU8cDsx0PhJUTOxpvGhnGeLACfeZxqX7SQ44YF7PcjlGENkxtG3Thmh0Weh3QSXvUk4XlGleslXHEhYHNlydA8vzg0IL-Lj5OLVFi2M9hrv0B1KxQQlkrOFdyLABm1gEqXz_d1jVC1MKR9HXTFZ5fTxn79yxron9L8lJyrfBIKwi21G4ejx0IfklU43MGofDxZlgCiWN86Ylq3dSmmcPR5C=s220-w165-h220-rw',
                chat: this.state.value,
                message_id: this.props.location.state.id
        }
        
        return this.props.sendMessage(data)
        
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


