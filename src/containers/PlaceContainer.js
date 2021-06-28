import React from 'react'
import Navigation from '../components/Navigation' 
import PlaceForm from '../components/PlaceForm'
import Places from '../components/Places'
import { connect } from 'react-redux'
import { fetchPlace } from '../actions/fetchPlace'
import Spinner from 'react-bootstrap/Spinner'



class PlaceContainer extends React.Component {

    state = {
        value: ''
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
