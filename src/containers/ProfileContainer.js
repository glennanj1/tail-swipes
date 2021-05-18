import React from 'react'
import Profile from '../components/Profile'



export default class ProfileContainer extends React.Component {

    loadProfiles = () => {
        return this.props.profiles.map(p =>
            <Profile id={p.id} name={p.attributes.name} image={p.attributes.image} />
        )}

    render() {
        return  <div>{this.loadProfiles()}</div>
    }
}