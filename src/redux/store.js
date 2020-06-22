import {createStore, combineReducers,compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeReducer'
import flagReducer from './flagReducer'

const rootReducer = combineReducers({
    pokemones: pokeReducer,
    banderas: flagReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}