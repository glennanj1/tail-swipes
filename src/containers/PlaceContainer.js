import './PlaceContainer.css'
import React from 'react'
import PlaceForm from '../components/PlaceForm'
import Places from '../components/Places'
import { connect } from 'react-redux'
import { fetchPlace } from '../actions/fetchPlace'
import Spinner from 'react-bootstrap/Spinner'



class PlaceContainer extends React.Component {

    state = {
        value: '',
        zipError: '',
        submitted: false
    }

    loadPlaces = () => {
        console.log(this.props)
        if(this.props.loading) {
            return (<Spinner animation="border" size='large' role="status" style={{position: 'absolute', top: '25vh'}}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
        } else if (this.state.submitted && this.props.data.length === 0) {
            return (<h1>No Dog parks here within 5 miles.</h1>)
        } else {
            return this.props.data.map(place => <Places key={place.id} name={place.attributes.name} vicinity={place.attributes.vicinity} rating={place.attributes.rating} photo={place.attributes.icon} />
        )}
    }

    handleSubmit = e => {
        
        e.preventDefault()
        const validated = this.validateZip();
        if (validated) {
            this.props.fetchPlace(this.state.value)
            this.setState({submitted: true})
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
