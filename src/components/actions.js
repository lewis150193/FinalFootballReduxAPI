import axios from 'axios'

export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS',
    ADDNUMBERS: 'ADD_NUMBERS'
};



export const getTeam = (team) => async  (dispatch) =>{
        const res = await axios.get("https://api.football-data.org//v2/teams/" + team +"", {
            headers: {
                'X-Auth-Token' : '5574cdbc43b04887b4f8bd52329d0c3f'
            }})
            .then((response) => response.data.squad.map((player) =>{
                    return player.name

                })
            )
        dispatch({ type: CONSTANTS.REQUEST_TEAMS, dispatch: res });

};


export const getTeamPlayers = (value) => {
    return {
      type:   CONSTANTS.GETPLAYERS,
      value: value
    }
};

export const addNumbers = (one,two,name) => {
    return {
      type: CONSTANTS.ADDNUMBERS,
      total: one + two,
      test: {
          name: name,
      }


    }
};


