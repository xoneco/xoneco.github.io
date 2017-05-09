import React, { Component } from 'react';

import './Random/styles.scss';
import unicode from './Random/unicode.png';
import avocado from './Random/avocado.png';

import Tile from '../shared-components/Tile';

class Random extends Component {
  render() {
    return (
      <div className="random">
        <Tile
          link="http://www.unicode.org/consortium/levels.html"
          image={unicode}
          description={'Student Member of the Unicode Consortium. You should join too. 😉'}
        />
        <Tile
          link="http://unicode.org/consortium/adopted-characters.html#b1f951"
          image={avocado}
          description={'Bronze Sponsor of the Avocado Emoji 🥑'}
        />
      </div>
    );
  }
}


export default Random;
