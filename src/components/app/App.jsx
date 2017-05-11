import React from 'react';

// Styles
import './App/App.scss';
import face from './App/face.png';

import Projects from './Projects';
import SocialMediaIcons from './SocialMediaIcons';
import Teams from './Teams';
import Random from './Random';
import Location from './Location';

function App() {
  return (
    <div className="site-wrapper">
      <img src={face} className="face" />
      <h1 className="name">Wilhelm Klopp</h1>
      <Location />
      <SocialMediaIcons />
      <Projects />
      <Teams />
      <Random />
    </div>
  );
}

export default App;
