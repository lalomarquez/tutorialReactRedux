// Dependencies
import { createStore, compose } from 'redux'
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
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

export default createStore(Reducer, InitialState, enhancers)