import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
import {BASE_IMG_URL} from '../../config/config';

const MemeViewer = (props) => {
  return(
  <svg className={styles.MemeViewer} data-test-id="MemViewer" witdh={(props.meme.image? `${props.meme.image.w}px` : '100%')} height={(props.meme.image? `${props.meme.image.h}px` : '100%')} viewBox={'0 0 ' + (props.meme.image? `${props.meme.image.w} ${props.meme.image.h}` : '1000 1000')}>
    {props.meme.image && <image href={`${BASE_IMG_URL}${props.meme.image.url}`} x={props.meme.image.x} y={props.meme.image.y} />}
    <text x={props.meme.x} y={props.meme.y} style={{'fontSize': props.meme.fontSize}} fill={props.meme.color}>{props.meme.texte}</text>
  </svg>
);}

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
