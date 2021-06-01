export function fetchProfiles() {
    console.log('fetch action')
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROFILES' });
        fetch ('http://localhost:3000/profiles').then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_PROFILES', profiles: ResponseJSON.data })})
    }
}

export function deleteProfile(profileId) {
    console.log('deleting action')
    return (dispatch) => {
        const config = {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
        }
        fetch(`http://localhost:3000/profiles/${profileId}`, config).then(r => {
            return(r) => {
                dispatch({ type: 'DELETE_PROFILE' })
            }
    })
  }
}