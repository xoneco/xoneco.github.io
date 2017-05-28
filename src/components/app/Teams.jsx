import React, { Component } from 'react';

import './Teams/styles.scss';
import uclapi from './Teams/uclapi.png';
import techsoc from './Teams/techsoc.jpg';

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
        <Tile
          link="https://techsoc.io"
          image={techsoc}
          name="UCLU TechSoc"
          description={'The Tech Society at University College London. (Served as President in 2016/2017)'}
        />
      </div>
    );
  }
}


export default Teams;
