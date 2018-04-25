// Dependencies
import { createStore, applyMiddleware } from 'redux' //compose
import { composeWithDevTools } from 'redux-devtools-extension'
// others
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COLOR } from '../helpers/ConstantActions'
import InitialState from '../api/products.json'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.product),
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product, index) => index !== action.index)
            }
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
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