import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Geolocation API developer.mozilla.org/en-US/docs/Web/API/Geolocation_API


import SeasonDisplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );

  return <div>Hi there!</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
