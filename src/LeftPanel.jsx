import React, { useState } from 'react';
import './LeftPanel.scss';

const LeftPanel = () => {
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

  const toggleSettingsPanel = () => {
    setShowSettingsPanel(!showSettingsPanel);
  };

  return (
    <div className="left-panel">
      <div className="left-panel__card">
        <div className="left-panel__card-header">
          <div className="left-panel__settings-icon" onClick={toggleSettingsPanel}>
            settings
            {/* Add the rotating settings icon here */}
          </div>
        </div>
        <div className="left-panel__card-body">
          <div className="left-panel__card-info">
            <h2>Your Name</h2>
            <p>Your Position</p>
          </div>
          <div className="left-panel__card-image">
            {/* Add your image here */}
          </div>
          <div className="left-panel__card-details">
            <p>Email: your@email</p>
            <p>Location: City, State</p>
          </div>
          <div className="left-panel__card-social-icons">
            {/* Add your social icons inside rounded borders here */}
          </div>
          <button className="left-panel__hire-me-button">
            <span className="left-panel__hire-me-icon">Email Icon</span>
            Hire Me
          </button>
        </div>
      </div>
      {showSettingsPanel && (
        <div className="settings-panel">
          {/* Add the settings panel content here */}
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
