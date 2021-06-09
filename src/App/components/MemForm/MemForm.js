import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemForm.module.css';
import {REST_ADR_SRV} from '../../config/config'

const MemForm = (props) => {
  const [state, setstate] = useState({titre: 'cc', x: 10, y: 20, texte: 'slt',fontSize:20,color: '#111111', imageId: 1});
  useEffect(() =>{
    props.onSubmit(state);
  },[state]);
  return (
  <div className={styles.MemForm}>
   <form onSubmit={(evt) => {
      evt.preventDefault();
      fetch(`${REST_ADR_SRV}/memes${state.id? '/'+state.id: ''}`,{
        headers:{
          "Content-Type":"application/json"
        },
        method:(state.id?'PUT':'POST'),
        body:JSON.stringify(state)
      }).then(flux=>flux.json())
        .then(obj=>{setstate(obj)})
      }
    }>
     <label htmlFor="titre">Titre</label><br />
      <input type="text" id="titre" value={state.titre} onChange={evt => {
        setstate({...state, titre: evt.target.value})
      }}/>
      <hr />
      <label htmlFor="image">Image</label><br />
      <select id="image" value={state.imageId} onChange={evt => {
        setstate({...state, imageId: Number(evt.target.value)})
      }}>
        {props.images.map((element, idx) => <option value={element.id} key={"option-image=" + idx}>{element.title}</option>)}
        
      </select>
      <hr />
      <label htmlFor="text">Texte</label><br />
      <input type="text" id="text" value={state.texte} onChange={evt => {
        setstate({...state, texte: evt.target.value})
      }}/>

      <hr />
      <label htmlFor="font-size">Taille du texte</label><br />
      <input type="number" id="font-size" value={state.fonteSize} onChange={evt => {
        setstate({...state, fontSize: evt.target.value})
      }}/>

      <hr />
      <label htmlFor="color">Couleur du texte</label><br />
      <input type="color" id="color" value={state.color} onChange={evt => {
        setstate({...state, color: evt.target.value})
      }}/>

      <hr />
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}><label htmlFor="x">X</label><br /><input type="number" id="x" value={state.x}onChange={evt => {
        setstate({...state, x: evt.target.value})
      }}/></div>
        <div style={{display: 'inline-block'}}><label htmlFor="y">Y</label><br /><input type="number" id="y" value={state.y}onChange={evt => {
        setstate({...state, y: evt.target.value})
      }}/></div>
      </div>
      <hr />
      <input type='submit' value="Save" />
      <input type='reset' value="Reset" />
   </form>
  </div>
);
  }

MemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
};

MemForm.defaultProps = {};

export default MemForm;
