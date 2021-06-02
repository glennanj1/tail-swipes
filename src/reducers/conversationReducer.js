const conversationReducer = (state = { conversations: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CONVERSATIONS':
        return {
          ...state,
          conversations: [...state.conversations],
          loading: true
        }
      case 'ADD_CONVERSATIONS':
        return {
          ...state,
          conversations: action.conversations,
          loading: false
        }
      case 'NEW_CHAT':
        return {
          ...state,
          conversations: [...state.conversations, action.payload]
        }
        
      default:
        return state;
    }
  }
  
  export default conversationReducer;