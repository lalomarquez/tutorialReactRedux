// Dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux' //compose
import { composeWithDevTools } from 'redux-devtools-extension'

import ReducerShoppin from './ReducerShoppin'
import ReducerColor from './ReducerColor'

//Redux Dev Tools
//const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

let middleware = [logger]

const rootReducer = combineReducers({
    store: ReducerShoppin,
    color: ReducerColor    
  });

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))