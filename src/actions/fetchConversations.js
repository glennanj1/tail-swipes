import { url } from '../index'

export function fetchConversations(id) {
    
    return (dispatch) => {
        dispatch({ type: 'LOADING_CONVERSATIONS' });
       
        fetch (`${url}/messages/${id}/conversations`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_CONVERSATIONS', conversations: ResponseJSON.data })})
    }
}

export function sendMessage({id, name, chat, image, message_id}) {
    
    return (dispatch) => {
        dispatch({ type: 'LOADING_CONVERSATIONS' })
        const config = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
        fetch (`${url}/messages/${id}/conversations`, config)
        .then(r => r.json())
        .then(ResponseJSON => {dispatch({ type: 'NEW_CHAT', payload: ResponseJSON.data})})
    }
}
