import axios from 'axios'

export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS'
}



export const getTeam = () => {
        return {
        type: CONSTANTS.REQUEST_TEAMS,
        dispatch : axios.get("https://api.football-data.org//v2/teams/2", {
            headers: {
                'X-Auth-Token' : '5574cdbc43b04887b4f8bd52329d0c3f'
            }})
            .then((response) => {
        (getTeamPlayers(response.data.squad))
    })
    }
}


export const getTeamPlayers = (value) => {
    return {
      type:   CONSTANTS.GETPLAYERS,
      value
    }
}


