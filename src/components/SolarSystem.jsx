import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../css/solarSystem.css';

class SolarSistem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
        </div>
      </div>
    );
  }
}

export default SolarSistem;
