// Dependencies
import { createStore, applyMiddleware } from 'redux' //compose
import { composeWithDevTools } from 'redux-devtools-extension'
// others
import acciones from '../helpers/ConstantActions.js'
import InitialState from '../data/items.json'

const Reducer = (state, action) => {
    switch (action.type) {
        case acciones.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.product),
            }
        case acciones.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product, index) => index !== action.index)
            }
        default:
            return state
    }
}

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

export default createStore(Reducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)))