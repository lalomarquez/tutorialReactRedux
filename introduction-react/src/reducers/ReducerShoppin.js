import { ADD_TO_CART, REMOVE_FROM_CART } from '../helpers/ConstantActions'
import initialState from '../api/products.json'

const ReducerShoppin = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default ReducerShoppin