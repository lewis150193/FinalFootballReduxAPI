import {CONSTANTS} from "./actions";

export const reducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.GETPLAYERS:
            return [...state , action.value]
        case CONSTANTS.REQUEST_TEAMS:
            return[action.dispatch]
        case CONSTANTS.ADDNUMBERS:
            return state + action.test.name
        default:
            return state
    }
}
