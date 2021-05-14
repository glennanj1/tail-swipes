const profileReducer = (state = { profiles: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_PROFILES':
        return {
          ...state,
          profiles: [...state.profiles],
          loading: true
        }
      case 'ADD_PROFILES':
        return {
          ...state,
          profiles: action.profiles,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default profileReducer;