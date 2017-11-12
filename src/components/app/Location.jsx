import React, { Component } from 'react';

import './Location/styles.scss';

const API_DOMAIN = 'https://api.wilhelmklopp.com';

class Location extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'London, GB',
    };
  }

  componentDidMount() {
    fetch(`${API_DOMAIN}/location`)
    .then(response => response.json())
    .then((json) => {
      this.setState({ location: json.location });
    });
  }
  render() {
    return (
      <div className="location">
        <Choose>
          <When condition={this.state.location.includes('London, GB')}>
            <span>{'Live in London, where I also currently am.'}</span>
          </When>
          <Otherwise>
            <span>{`Live in London, but I'm currently in ${this.state.location}`}</span>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}


export default Location;
