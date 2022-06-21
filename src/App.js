import React from 'react';
import Header from './components/Header';
import SolarSistem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSistem />
      </>
    );
  }
}

export default App;
