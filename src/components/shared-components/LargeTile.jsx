import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LargeTile/styles.scss';

class LargeTile extends Component {
  render() {
    return (
      <div className="large-tile">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div>
            <Choose>
              <When condition={this.props.image !== undefined}>
                <img src={this.props.image} />
              </When>
              <Otherwise>
                <span className="emoji">{this.props.emoji}</span>
              </Otherwise>
            </Choose>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
}

LargeTile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  emoji: PropTypes.string,
};

LargeTile.defaultProps = {
  image: undefined,
  name: undefined,
  description: undefined,
  link: undefined,
  emoji: '💩',
};

export default LargeTile;
