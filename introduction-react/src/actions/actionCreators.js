import { ADD_TO_CART, REMOVE_FROM_CART } from '../helpers/ConstantActions'

const addToCart = product => {
    return {
        type: ADD_TO_CART,
        product
    }
}

const removeItem = index => {
    return {
        type: REMOVE_FROM_CART,
        index,
    }
}

export { addToCart, removeItem }