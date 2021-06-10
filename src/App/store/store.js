import { StrictMode } from "react";
import { createStore } from "redux";
import {REST_ADR_SRV} from '../config/config'

export const initialState = {
    current: { titre: 'titre', x: 0, y: 0, texte: 'la réu a 18h30', imageId: 3, fontSize: 12, color: '#FFFFFF' }
}

export const PUBLIC_ACTION_CURRENT = Object.freeze({
    SET_CURRENT: 'SET_CRRENT',
    SAVE_CURRENT: 'SAVE_CURRENT',
    LOAD_CURRENT: 'LOAD_CURRENT',
    CLEAR_CURRENT: 'CLEAR_CURRENT'
});

const currentReducer = (state = initialState, action) => {
    switch (action.type) {

        case PUBLIC_ACTION_CURRENT.SET_CURRENT:
            return { ...state, current: action.value }
        case PUBLIC_ACTION_CURRENT.LOAD_CURRENT:
            return { ...state, ...action.value }
        case PUBLIC_ACTION_CURRENT.SAVE_CURRENT:
            fetch(`${REST_ADR_SRV}/memes${state.current.id ? '/' + state.current.id : ''}`, {
                headers: {
                  "Content-Type": "application/json"
                },
                method: (state.id ? 'PUT' : 'POST'),
                body: JSON.stringify(state.current)
              }).then(flux => flux.json())
                .then(obj => { store.dispatch({type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) });
            return state;
        case PUBLIC_ACTION_CURRENT.CLEAR_CURRENT:
            return { ...initialState }
        default:
            return state
    }
}
//store init.
const store = createStore(currentReducer);
//store changes spy
// store.subscribe(()=>{
//     console.log(store.getState());
// });
//store use
export default store;
/* let monState=undefined;
monState = currentReducer(monState, {type:PUBLIC_ACTION_CURRENT.SET_CURRENT, value:{titre: 'titre', x: 0, y: 0, text: 'd3', imageId: 3, fontSize: 8, color: '#111111'}})
console.log(monState);

monState = currentReducer(monState, {type:PUBLIC_ACTION_CURRENT.SET_CURRENT, value:{titre: 'titre 2', x: 0, y: 0, text: 'd3 2', imageId: 3, fontSize: 8, color: '#111111'}})
console.log(monState); */