const messageReducer = (state = { messages: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_MESSAGES':
        return {
          ...state,
          messages: [...state.messages],
          loading: true
        }
      case 'ADD_MESSAGES':
        return {
          ...state,
          messages: action.messages,
          loading: false
        }
      case 'NEW_MESSAGE':
        return {
          ...state, 
          messages: [...state.messages, action.payload]
        }
      default:
        return state;
    }
  }
  
  export default messageReducer;