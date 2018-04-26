import { CHANGE_COLOR } from '../helpers/constActions'

const initialState = {
    color: []
}

const ReducerColor = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

export default ReducerColor