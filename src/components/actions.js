import axios from 'axios'

export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS'
}



export const getTeam = () => {
        return(dispatch) =>{
        return axios.get("https://api.football-data.org//v2/teams/2")
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


