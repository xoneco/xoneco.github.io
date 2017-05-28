import React, { Component } from 'react';

import './CurrentOccupation/styles.scss';

import LargeTile from '../shared-components/LargeTile';

import campusExpertSticker from './CurrentOccupation/campus-experts-sticker.png';

class CurrentOccupation extends Component {
  render() {
    return (
      <div className="current-occupation">
        <LargeTile
          image={campusExpertSticker}
          name={'GitHub Developer Relations Intern'}
          description={'This summer I\'m at GitHub to help spread the word about GitHub Campus Experts. 🚩'}
          link={'https://education.github.com/experts'}
        />
      </div>
    );
  }
}

export default CurrentOccupation;
