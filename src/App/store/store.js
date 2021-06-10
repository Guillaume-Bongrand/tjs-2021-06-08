import { StrictMode } from "react";
import { createStore, combineReducers } from "redux";
import { REST_ADR_SRV } from '../config/config'

export const initialState = {
    current: { titre: 'titre', x: 0, y: 0, texte: 'la réu a 18h30', imageId: 3, fontSize: 12, color: '#FFFFFF' }
}

export const PUBLIC_ACTION_CURRENT = Object.freeze({
    SET_CURRENT: 'SET_CRRENT',
    SAVE_CURRENT: 'SAVE_CURRENT',
    LOAD_CURRENT: 'LOAD_CURRENT',
    CLEAR_CURRENT: 'CLEAR_CURRENT'
});

export const globalInitialState = {
    images: [],
    memes: []
}

export const PUBLIC_ACTION_GLOBAL = Object.freeze({
    INITIAL_LOAD: 'INITIAL_LOAD',
    UPDATE_IMAGE_LIST: 'UPDATE_IMAGE_LIST',
    UPDATE_MEME_LIST: 'UPDATE_MEME_LIST'
});
/**
 * 
 * @param {object} state
 * @param {object} action 
 * @returns 
 */
const globalReducer = (state = globalInitialState, action) => {
    console.log(state);
    const typeAction=(action.type.includes('@@redux/INIT')? PUBLIC_ACTION_GLOBAL.INITIAL_LOAD:action.type)
    switch (typeAction) {

        case PUBLIC_ACTION_GLOBAL.INITIAL_LOAD:
            fetch(`${REST_ADR_SRV}/images`)
                .then(flux => flux.json())
                .then(arr => store.dispatch({type:PUBLIC_ACTION_GLOBAL.UPDATE_IMAGE_LIST, values: arr}));
            fetch(`${REST_ADR_SRV}/memes`)
                .then(flux => flux.json())
                .then(arr => store.dispatch({type:PUBLIC_ACTION_GLOBAL.UPDATE_MEME_LIST, values: arr}));
            return state 
        case PUBLIC_ACTION_GLOBAL.UPDATE_IMAGE_LIST:
            return {...state, images:action.values}
        case PUBLIC_ACTION_GLOBAL.UPDATE_MEME_LIST:
            return {...state, memes:action.values}
        default:
            return state
    }
}

/**
 * 
 * @param {object} state current state
 * @param {object} action  action du redur
 * @returns nouvel etat
 */
const currentReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case PUBLIC_ACTION_CURRENT.SET_CURRENT:
            return { ...state, current: action.value }
        case PUBLIC_ACTION_CURRENT.LOAD_CURRENT:
            fetch(`${REST_ADR_SRV}/memes/${action.value}`)
                .then(flux => flux.json())
                .then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) });
            return state;
        case PUBLIC_ACTION_CURRENT.SAVE_CURRENT:
            fetch(`${REST_ADR_SRV}/memes${state.current.id ? '/' + state.current.id : ''}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: (state.id ? 'PUT' : 'POST'),
                body: JSON.stringify(state.current)
            }).then(flux => flux.json())
                .then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) });
            return state;
        case PUBLIC_ACTION_CURRENT.CLEAR_CURRENT:
            return { ...initialState }
        default:
            return state
    }
}

const combinedReducer = combineReducers({meme: currentReducer, datas: globalReducer})
//store init.
const store = createStore(combinedReducer);
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