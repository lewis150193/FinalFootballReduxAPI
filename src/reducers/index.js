import {CONSTANTS} from "../actions/index";
import {combineReducers} from 'redux'

export const PlayerReducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.GETPLAYERS:
            return  [state]
        case CONSTANTS.REQUEST_TEAMS:
           return [
               action.payload.data.squad.map(player => {
               return player.name
                    })
           ]
        case CONSTANTS.ADDNUMBERS:
            return [...state + action.total]
        default:
            return state
    }
}

export default combineReducers({
    reducer: PlayerReducer
})

