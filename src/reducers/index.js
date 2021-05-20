import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'

export default combineReducers({
    messages: messagesReducer,
    profiles: profileReducer
})