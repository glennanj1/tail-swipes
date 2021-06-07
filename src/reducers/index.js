import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import conversationReducer from './conversationReducer'
import placeReducer from './placeReducer'

export default combineReducers({
    messages: messagesReducer,
    profiles: profileReducer,
    conversations: conversationReducer,
    places: placeReducer
})