import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import Navigation from '../components/Navigation' 
export class MapContainer extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <Map google={window.google} />
            </div>
        )
    }

}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)