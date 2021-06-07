import { url } from '../index'

export function fetchMessages() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        fetch (`${url}/messages`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_MESSAGES', messages: ResponseJSON.data })})
    }
}
export const createMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
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
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        fetch (`${url}/messages/${messageId}`)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'GET_MESSAGE', messages: ResponseJSON.data})})
    }
}







