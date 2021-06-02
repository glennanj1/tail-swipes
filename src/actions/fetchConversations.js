export function fetchConversations(id) {
    console.log('fetch convos')
    return (dispatch) => {
        dispatch({ type: 'LOADING_CONVERSATIONS' });
        console.log('loading messages from fetch')
        fetch (`http://localhost:3000/messages/${id}/conversations`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_CONVERSATIONS', conversations: ResponseJSON.data })})
    }
}

export function sendMessage({id, name, chat, image, message_id}) {
    console.log('sending message') 
    console.log(id)
    return (dispatch) => {
        dispatch({ type: 'LOADING_CONVERSATIONS' })
        console.log('sending message') 
        const config = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                conversation: {
                    name: name,
                    chat: chat,
                    image: image,
                    message_id: message_id 
                }
            })
        }
        fetch (`http://localhost:3000/messages/${id}/conversations`, config)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'NEW_CHAT', payload: ResponseJSON.data})})
    }
}