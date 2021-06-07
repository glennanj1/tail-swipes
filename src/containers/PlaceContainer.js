import React from 'react'
import Navigation from '../components/Navigation' 
import PlaceForm from '../components/PlaceForm'
import Places from '../components/Places'
import { connect } from 'react-redux'
import { fetchPlace } from '../actions/fetchPlace'


class PlaceContainer extends React.Component {

    state = {
        value: ''
    }

    loadPlaces = () => {
        return this.props.data.map(place => <Places name={place.attributes.name} vicinity={place.attributes.vicinity} />)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchPlace(this.state.value)
        this.setState({value: ''})
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    render() {
        return(
            <div>
                <Navigation />
                <PlaceForm value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.handleChange} />
                {this.loadPlaces()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      data: state.places.places,
      loading: state.places.loading
    }
}
  
export default connect(mapStateToProps, { fetchPlace })(PlaceContainer);
