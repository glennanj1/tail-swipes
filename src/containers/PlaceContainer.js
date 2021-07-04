import React from 'react'
import Navigation from '../components/Navigation' 
import PlaceForm from '../components/PlaceForm'
import Places from '../components/Places'
import { connect } from 'react-redux'
import { fetchPlace } from '../actions/fetchPlace'
import Spinner from 'react-bootstrap/Spinner'



class PlaceContainer extends React.Component {

    state = {
        value: '',
        zipError: ''
    }

    loadPlaces = () => {
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '25vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else {
            return this.props.data.map(place => <Places key={place.id} name={place.attributes.name} vicinity={place.attributes.vicinity} />
        )}
    }

    handleSubmit = e => {
        e.preventDefault()
        const validated = this.validateZip();
        if (validated) {
            this.props.fetchPlace(this.state.value)
            this.setState({value: ''})
        }
        
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    validateZip = () => {
        let zipError = ""

        if (this.state.value.length !== 5) {
            zipError = "Please enter 5 digit zip code."
        }

        if (zipError) {
            this.setState({zipError})
            return false
        }
        this.setState({zipError: ""})
        return true

    }

    render() {
        return(
            <div>
                <Navigation />
                <p>
                    Search for local dog parks in your area by Zip Code.
                </p>
                <PlaceForm value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.handleChange} zipError={this.state.zipError} />
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
