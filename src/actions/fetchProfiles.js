export function fetchProfiles() {
    console.log('fetch action')
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROFILES' });
        fetch ('http://localhost:3000/profiles').then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_PROFILES', profiles: ResponseJSON.data })})
    }
}