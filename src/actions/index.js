import axios from 'axios'
export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS',
    ADDNUMBERS: 'ADD_NUMBERS'
};

const Token = '5574cdbc43b04887b4f8bd52329d0c3f';



export const getTeam = (team) => async  (dispatch) =>{

    let res;
    try {
        res = await axios.get(`https://api.football-data.org//v2/teams/${team}`, {
            headers: {
                'X-Auth-Token' : Token
            }});
        dispatch({
            type: CONSTANTS.REQUEST_TEAMS,
            payload: res
            })

    } catch (e) {
        // let's pretend it worked anyway, the api don't work for me right now
        dispatch({
            type: CONSTANTS.REQUEST_TEAMS,
            payload: 'Cant be shown'
        })
    }
};


export const getTeamPlayers = () => (dispatch) =>{
   dispatch({
      type:  CONSTANTS.GETPLAYERS,
      value: 5633
})
};

export const addNumbers = (one,two) =>  (dispatch) =>{
    dispatch ({
      type: CONSTANTS.ADDNUMBERS,
      total: one + two,

    })
};


