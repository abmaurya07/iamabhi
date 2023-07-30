import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';
import {FaGithubAlt} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md' 
import myImg from '../Assets/me.jpg';

const LeftPanel = ({ openThemeCard }) => {
  const socialIcons = [
    {
      icon: SlSocialInstagram,
      link: 'https://instagram.com/bug_free',
    },
    {
      icon: SlSocialTwitter,
      link: 'https://twitter.com',
    },
    {
      icon: FaGithubAlt,
      link: 'https://github.com',
    },
  ];

  return (
    <div className="left-panel__card">
      <div className="left-panel__card-header">
        <h2>Abhishek</h2>

        <p>
          FullStack Developer
        </p>
   
      </div>
      <div className="left-panel__card-body">
        <div className="left-panel__card-image">
          <img src={myImg} alt="My Image" />
        </div>
        <div className="left-panel__card-details">
          <h2>hello@iamabhi.com</h2>
          <h2>Based in Indore, IN</h2>
        </div>
        <div className="left-panel__card-social-icons">
          {socialIcons.map((socialIcon, index) => (
            <a key={index} href={socialIcon.link} target="_blank" rel="noopener noreferrer" className='social-icon'>
              {React.createElement(socialIcon.icon)}
            </a>
          ))}
        </div>
        <button className="left-panel__hire-me-button">
          <span className="left-panel__hire-me-icon"><MdOutlineEmail /></span>
          Hire Me
        </button>
      </div>

      <div className="left-panel__settings-icon" onClick={openThemeCard}>
<IoMdSettings />
</div>
    </div>
  );
};

export default LeftPanel;




