import React, { Component } from 'react';

import './Teams/styles.scss';
import uclapi from './Teams/uclapi.png';

import Tile from '../shared-components/Tile';

class Teams extends Component {
  render() {
    return (
      <div className="teams">
        <Tile
          link="https://uclapi.com"
          image={uclapi}
          name="UCL API"
          description={'An API for student developers, that improves the UCL experience for all.'}
        />
      </div>
    );
  }
}


export default Teams;
