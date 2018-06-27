import React from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App text-center">
        <Listings />
        <Building />
      </div>
    );
  }
}

export default App;
