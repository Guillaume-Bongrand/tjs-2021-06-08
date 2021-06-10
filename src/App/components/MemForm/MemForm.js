import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemForm.module.css';
import { REST_ADR_SRV } from '../../config/config'
import store, { initialState, PUBLIC_ACTION_CURRENT } from '../../store/store';
import { combineReducers } from 'redux';

const MemForm = (props) => {
  const [state, setState] = useState(initialState.current);

  useEffect(() => {
    //console.log("store",store);
    //setState(store.getState().meme.current);
    store.subscribe(() => {
      console.log("store", store.getState().meme.current)
      //setState(store.getState().meme.current);
    })
  }, [1]);

  useEffect(() => {
    store.dispatch({
      type: PUBLIC_ACTION_CURRENT.SET_CURRENT,
      value: state,
    });
  }, [state]);
  return (
    <div className={styles.MemForm}>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        store.dispatch({type: PUBLIC_ACTION_CURRENT.SAVE_CURRENT})
      }
      }>
        <label htmlFor="titre">Titre</label><br />
        <input type="text" id="titre" value={state.titre} onChange={evt => {
          setState({ ...state, titre: evt.target.value })
        }} />
        <hr />
        <label htmlFor="image">Image</label><br />
        <select id="image" value={state.imageId} onChange={evt => {
          setState({ ...state, imageId: Number(evt.target.value) })
        }}>
          {props.images.map((element, idx) => <option value={element.id} key={"option-image=" + idx}>{element.title}</option>)}

        </select>
        <hr />
        <label htmlFor="text">Texte</label><br />
        <input type="text" id="text" value={state.texte} onChange={evt => {
          setState({ ...state, texte: evt.target.value })
        }} />

        <hr />
        <label htmlFor="font-size">Taille du texte</label><br />
        <input type="number" id="font-size" value={state.fontSize} onChange={evt => {
          setState({ ...state, fontSize: evt.target.value })
        }} />

        <hr />
        <label htmlFor="color">Couleur du texte</label><br />
        <input type="color" id="color" value={state.color} onChange={evt => {
          setState({ ...state, color: evt.target.value })
        }} />

        <hr />
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}><label htmlFor="x">X</label><br /><input type="number" id="x" value={state.x} onChange={evt => {
            setState({ ...state, x: evt.target.value })
          }} /></div>
          <div style={{ display: 'inline-block' }}><label htmlFor="y">Y</label><br /><input type="number" id="y" value={state.y} onChange={evt => {
            setState({ ...state, y: evt.target.value })
          }} /></div>
        </div>
        <hr />
        <input type='submit' value="Save" />
        <input type='reset' value="Reset" />
      </form>
    </div>
  );
}

MemForm.propTypes = {
  images: PropTypes.array.isRequired
};

MemForm.defaultProps = {};

export default MemForm;
