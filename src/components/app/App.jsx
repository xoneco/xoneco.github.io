import React from 'react';

// Styles
import './App/App.scss';
import face from './App/face.png';

import Projects from './Projects';
import SocialMediaIcons from './SocialMediaIcons';
import Teams from './Teams';
import Random from './Random';

function App() {
  return (
    <div className="site-wrapper">
      <img src={face} className="face" />
      <h1 className="name">Wilhelm Klopp</h1>
      <SocialMediaIcons />
      <Projects />
      <Teams />
      <Random />
    </div>
  );
}

export default App;
