export function fetchProfiles() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROFILES' });
        fetch ('http://localhost:3000/profiles')
            .then(r => r.json())
            .then(profiles => dispatch({ type: 'ADD_PROFILES', profiles }))
    }
}