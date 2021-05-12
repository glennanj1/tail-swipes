const profileReducer = (state = { profiles: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_PROFILES':
        return {
          ...state,
          profiels: [...state.profiles],
          loading: true
        }
      case 'ADD_PROFILES':
        return {
          ...state,
          cats: action.profiles,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default profileReducer;