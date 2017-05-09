import React, { Component } from 'react';

import './Projects/styles.scss';

import simplepoll from './Projects/images/simplepoll.png';
import slackrank from './Projects/images/slackrank.png';

import Tile from '../shared-components/Tile';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Tile
          image={simplepoll}
          name="Simple Poll"
          description="Simple, native polling for Slack. 15th most popular Slack integration."
          link="https://simplepoll.rocks"
        />
        <Tile
          image={slackrank}
          name="Slack Rank"
          description="Historically ranks the 100 most popular Slack integrations."
          link="https://slackrank.wilhelmklopp.com"
        />
        <Tile
          name="RBcalendar"
          description="Turn UCL room bookings into ics calendar events."
          link="https://rbcalendar.uclapi.com"
          emoji="📅"
        />
        <Tile
          name="Veruto"
          description="Mobile app to find the closest free room in UCL."
          link="https://github.com/uclapi/veruto"
          emoji="🎓"
        />
      </div>
    );
  }
}

export default Projects;
