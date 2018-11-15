import axios from 'axios'

export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS'
}



export const getTeam = (dispatch) => {
        return {
        type: CONSTANTS.REQUEST_TEAMS,
        dispatch : axios.get("https://api.football-data.org//v2/teams/2")
            .then((response) => {
        dispatch(getTeamPlayers(response.data.squad))
    })
    }
}


export const getTeamPlayers = (value) => {
    return {
      type:   CONSTANTS.GETPLAYERS,
      value
    }
}


