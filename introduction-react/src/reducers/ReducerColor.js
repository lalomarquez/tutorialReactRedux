import { CHANGE_COLOR } from '../helpers/ConstantActions'

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