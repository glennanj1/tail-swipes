import { url } from '../index.js'

export function fetchPlace(zip) {
    console.log('fetching places')
    return (dispatch) => {
        dispatch({ type: 'LOADING_PLACES' });
        fetch (`${url}/places/${zip}`).then(r => r.json()).then(ResponseJSON => {dispatch({ type: 'ADD_PLACES', places: ResponseJSON.data })})
    }
}