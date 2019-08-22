import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Geolocation API developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <div>Latitude: { this.state.lat } </div>

    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
