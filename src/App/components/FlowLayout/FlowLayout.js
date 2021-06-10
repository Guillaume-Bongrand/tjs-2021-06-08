import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlowLayout.module.css';

const FlowLayout = (props) => (
  <div className={styles.FlowLayout}>
    {props.children.map((elem, idx)=>elem)}
  </div>
);

FlowLayout.propTypes = {};

FlowLayout.defaultProps = {};

export default FlowLayout;
