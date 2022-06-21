import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';

class SolarSistem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSistem;
