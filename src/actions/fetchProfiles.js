import { url } from '../index.js'

export function fetchProfiles() {
    
    return (dispatch) => {
        dispatch({ type: 'LOADING_PROFILES' });
        fetch (`${url}/profiles`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_PROFILES', profiles: ResponseJSON.data })})
    }
}

export function deleteProfile(profileId) {
    return (dispatch) => {
        const config = {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        fetch(`${url}/profiles/${profileId}`, config).then(r => {
            return(r) => {
                dispatch({ type: 'DELETE_PROFILE' })
            }
    })
  }
}
