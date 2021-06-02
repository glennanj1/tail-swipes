import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import conversationReducer from './conversationReducer'

export default combineReducers({
    messages: messagesReducer,
    profiles: profileReducer,
    conversations: conversationReducer
})