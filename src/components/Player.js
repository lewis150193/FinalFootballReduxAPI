import React from 'react'
import { connect } from 'react-redux'
import {getTeam ,getTeamPlayers,addNumbers} from "../actions/index";

class Player extends React.Component{
    constructor(props, context) {
        super(props, context);

         this.state = {
             playerState : ''
         }

        this.renderList = this.renderList.bind(this)
    }

    componentWillMount() {
        this.props.getT(2);
    }


    renderList(){
    const list = this.props.reducer
    if(list && list.length){
        return list.map((player, index) => {
        return (
            <div key={index}>
                <p>{index}:  {player} </p>
            </div>
        )
    })
    } else {
     return (
        <div>
            Nothing in list
        </div>
     )
        }
    }






    render() {
        console.log(this.props)
        return (
            //Dortmund = 4 Hof = 2
            <div>
                <form>
                    <div>
                        <label>
                            <input type={'radio'}
                            onChange={event => {

                                this.setState({playerState: event.target.value})
                                                 console.log("Dortmund Clicked")
                                                  this.props.getT(4)

                            }}
                            value={'dortmund'}
                            checked={this.state.playerState === 'dortmund'}
                                />
                            Display Dortmund
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type={'radio'}
                           onChange={event => {
                               this.setState({playerState: event.target.value})
                                              console.log("Hoffenhiem Clicked")
                                              this.props.getT(2)

                           }}
                           value={'hoffenhiem'}
                           checked={this.state.playerState === 'hoffenhiem'}

                                />
                            Display Hoffenhiem
                        </label>
                    </div>
                </form>
                <div>{this.renderList()}</div>
            </div>
           );
    }
}

    const MapStateToProps = (state) => {
    //What ever returned from here will show up as props for playerList
    return {reducer: [...state]}
    }

export default connect(MapStateToProps,
    {
        GTP: getTeamPlayers,
        getT: getTeam,
        Add: addNumbers
    }
        )(Player)

