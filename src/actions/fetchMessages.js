export function fetchMessages() {
    console.log('fetch messages')
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        console.log('loading messages from fetch')
        fetch ('http://localhost:3000/messages').then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_MESSAGES', messages: ResponseJSON.data })})
    }
}