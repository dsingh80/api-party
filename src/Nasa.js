import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nasa.css'

const photoDates = {
  curiosity: '2015-05-30',
  opportunity: '2015-04-30',
  spirit: '2004-01-10'
}

function Nasa(props) {
  return (
    <div className="nasa">
      <img className="nasa-logo" src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt="nasa" />

      <h2>Select a mars rover.</h2>
      <ul className="nav-links">
        <li>
          <NavLink to='/nasa/curiosity'>Curiosity</NavLink>
        </li>
        <li>
          <NavLink to='/nasa/opportunity'>Opportunity</NavLink>
        </li>
        <li>
          <NavLink to='/nasa/spirit'>Spirit</NavLink>
        </li>
      </ul>

      <Route exact path='/nasa' render={() => (
          <h2>No rover selected.</h2>
      )} />

      <Route path={`${props.match.url}/:rover`} component={RoverInfo} />
      
    </div>
  )
}

class RoverInfo extends Component {
  constructor(props) {
    super(props)
    this.state ={
      roverName: '',
      imageUrl: '',
      earthDate: '',
    }
  }

  componentWillMount() {
    this.getRoverData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.getRoverData(nextProps);
    }
  }

  getRoverData(props) {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.match.params.rover}/photos?earth_date=${photoDates[props.match.params.rover]}&camera=fhaz&api_key=OuqrobPCx5iFKbt9aXVA5P8sGPLVgaP9T2Yh5Auo`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          roverName: data.photos[0].rover.name,
          imageUrl: data.photos[0].img_src,
          earthDate: data.photos[0].earth_date
        })
      })
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div className="rover-info">
        <h2>Mars Rover Name: {this.state.roverName}</h2>
        <h3>Earth Date: {this.state.earthDate}</h3>
        <img src={this.state.imageUrl} />
      </div>
    )
  }
}

export default Nasa