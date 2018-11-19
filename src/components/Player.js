import React from 'react'
import { connect } from 'react-redux'
import {getTeam} from "../actions";

class Player extends React.Component{
    constructor(props, context) {
        super(props, context);


        this.renderList = this.renderList.bind(this)
    }


    renderList(){
        console.log("In RenderList")
    const list = this.props.reducer
    if(list.length){
        console.log("List has length")
        list.map(player => {
        return (
            <div >
                <p>{player}</p>
            </div>
        )
    })
    } else {
    console.log('Nothing in list')

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>{this.renderList()}</div>
            </div>
        );
    }
}

    const MapStateToProps = (state) => {
    //What ever returned from here will show up as props for playerList
    return {reducer: state.reducer}
    }

export default connect(MapStateToProps)(Player )

