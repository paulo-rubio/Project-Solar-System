import React from 'react';
import Header from './components/Header';
import SolarSistem from './components/Solar-Sistem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSistem><Title /></SolarSistem>
      </>
    );
  }
}

export default App;
