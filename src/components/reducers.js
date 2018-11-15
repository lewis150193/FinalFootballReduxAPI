import {CONSTANTS} from "./actions";

export const reducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.GETPLAYERS:
            return [...state , action.value]
        case CONSTANTS.REQUEST_TEAMS:
            return[...state, action.value]
        default:
            return state
    }
}