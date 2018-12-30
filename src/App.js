import React, { Component } from 'react';
import './App.scss';

import CompOne from './components/compOne/compOne';
import CompTwo from './components/compTwo/compTwo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CompOne/>
        <CompTwo/>
      </React.Fragment>
    );
  }
}

export default App;
