import React from 'react';
import PropTypes from 'prop-types';
import LeftPanel from './LeftPanel';
import Navigation from './Navigation';
import styles from './module.scss'; // Import the module.css file

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles['layout__left-panel']}>
        <LeftPanel />
      </div>
      <div className={styles['layout__content']}>
        <div className={styles['layout__main-content']}>
          {children}
        </div>
        <div className={styles['layout__navigation']}>
          <Navigation />
        </div>
      </div>
  
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
