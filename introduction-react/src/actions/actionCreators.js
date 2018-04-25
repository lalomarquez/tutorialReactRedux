// Dependencies
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COLOR } from '../helpers/ConstantActions'

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

const changeColor = color => {
    return {
        type: CHANGE_COLOR,
        color
    }
}

export { addToCart, removeItem, changeColor }