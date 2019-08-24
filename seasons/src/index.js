import React from 'react';
import ReactDOM from 'react-dom';
//Geolocation API developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  //Line 18 is a complete and equivalent way of doing linkes 8-15
  state = { lat: null, errorMessage: ''}

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("Component updated")
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading...</div>
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
