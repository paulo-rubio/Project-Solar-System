import React from 'react';
import Header from './components/Header';
import SolarSistem from './components/SolarSystem';
import Missions from './components/Missions';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSistem />
        <Missions />
      </>
    );
  }
}

export default App;
