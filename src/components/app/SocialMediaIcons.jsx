import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import './SocialMediaIcons/styles.scss';

fontawesome.library.add(brands);

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons-container">
      <a href="https://twitter.com/wilhelmklopp">
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          size="2x"
        />
      </a>
      <a href="https://github.com/wilhelmklopp">
        <FontAwesomeIcon
          icon={['fab', 'github']}
          size="2x"
        />
      </a>
      <a href="https://linkedin.com/in/wilhelmklopp">
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          size="2x"
        />
      </a>
      <a href="https://medium.com/@wilhelmklopp">
        <FontAwesomeIcon
          icon={['fab', 'medium']}
          size="2x"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
