import {CONSTANTS} from "../actions/index";
import {combineReducers} from 'redux'

export const reducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.GETPLAYERS:
            return [...state , action.value]
        case CONSTANTS.REQUEST_TEAMS:
            return[...state, action.dispatch]
        case CONSTANTS.ADDNUMBERS:
            return state + action.test.name
        default:
            return state
    }
}

export default combineReducers({
    reducer: reducer
})
