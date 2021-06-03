import { url } from '../index'

export function fetchMessages() {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log('loading messages from fetch')
        fetch (`${url}/messages`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_MESSAGES', messages: ResponseJSON.data })})
    }
}
export const createMessage = (message) => {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log('creating new message from match')
        const config = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        }
        fetch (`${url}/messages`, config)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'NEW_MESSAGE', payload: ResponseJSON.data})})
    }
}
export const getMessage = (messageId) => {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log(messageId)
        fetch (`${url}/messages/${messageId}`)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'GET_MESSAGE', messages: ResponseJSON.data})})
    }
}







