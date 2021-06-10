import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
    <span className={styles.Header}>Mems</span><span className={styles.blue+' '+styles.italic}>JS</span>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
