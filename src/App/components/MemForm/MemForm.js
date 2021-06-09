import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemForm.module.css';

const MemForm = (props) => {
  const [state, setstate] = useState({titre: 'cc', x: 10, y: 20, texte: 'slt', image: 1});
  return (
  <div className={styles.MemForm}>
   <form onSubmit={(evt) => {
      evt.preventDefault();
      props.onSubmit(state);
      }
    }>
     <label htmlFor="titre">Titre</label><br />
      <input type="text" id="titre" value={state.titre} onChange={evt => {
        setstate({...state, titre: evt.target.value})
      }}/>
      <hr />
      <label htmlFor="image">Image</label><br />
      <select id="image" value={state.image} onChange={evt => {
        setstate({...state, image: evt.target.value})
      }}>
        <option value="1">img.jpg</option>
      </select>
      <hr />
      <label htmlFor="text">Texte</label><br />
      <input type="text" id="text" value={state.texte} onChange={evt => {
        setstate({...state, texte: evt.target.value})
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
    {JSON.stringify(state)}
  </div>
);
  }

MemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

MemForm.defaultProps = {};

export default MemForm;
