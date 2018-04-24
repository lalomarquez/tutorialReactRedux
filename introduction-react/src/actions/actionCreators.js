import action from '../helpers/ConstantActions.js'

const addToCart = product => {
    return {
        type: action.ADD_TO_CART,
        product
    }
}

const removeItem = index => {
    return {
        type: action.REMOVE_FROM_CART,
        index,
    }
}
export { addToCart, removeItem}