import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COLOR } from '../helpers/constActions'

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

// const loadColors = () => {
//     return axios.get('http://www.colr.org/json/color/random')
//         .then((response) => {
//             console.log('RESPONSE', response)
//             return response.data.new_color
//         }).catch(error => {
//             console.error('FAIL :-(', error)
//         })
// }

export { addToCart, removeItem, changeColor }