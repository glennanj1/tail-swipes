export function fetchMessages() {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log('loading messages from fetch')
        fetch ('https://tailswipes.netlify.app/messages').then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_MESSAGES', messages: ResponseJSON.data })})
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
                'Accepts': 'application/json'
            },
            body: JSON.stringify(message)
        }
        fetch ('https://tailswipes.netlify.app/messages', config)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'NEW_MESSAGE', payload: ResponseJSON.data})})
    }
}
export const getMessage = (messageId) => {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log(messageId)
        fetch (`https://tailswipes.netlify.app/messages/${messageId}`)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'GET_MESSAGE', messages: ResponseJSON.data})})
    }
}







