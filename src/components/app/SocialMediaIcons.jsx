import React from 'react';
import FontAwesome from 'react-fontawesome';

import './SocialMediaIcons/styles.scss';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons-container">
      <a href="https://twitter.com/wilhelmklopp">
        <FontAwesome
          name="twitter"
          size="2x"
        />
      </a>
      <a href="https://github.com/wilhelmklopp">
        <FontAwesome
          name="github"
          size="2x"
        />
      </a>
      <a href="https://linkedin.com/in/wilhelmklopp">
        <FontAwesome
          name="linkedin"
          size="2x"
        />
      </a>
      <a href="https://medium.com/@wilhelmklopp">
        <FontAwesome
          name="medium"
          size="2x"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
