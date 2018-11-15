import React, { Component } from 'react';
import {createStore} from 'redux'
import {reducer} from "./components/reducers";
import {getTeamPlayers, getTeam} from "./components/actions";

class App extends Component {
<<<<<<< HEAD
=======
  render() {
      const store = createStore(reducer)


      store.subscribe(() => {
          console.log("Store changed ", store.getState())
      })

      store.dispatch(getTeamPlayers(344))
      store.dispatch(getTeamPlayers(344))
      store.dispatch(getTeam(16))





>>>>>>> bcf539801df411f6bf1aa2e1354ec87e02b0470f

    componentWillMount() {
        const store = createStore(reducer)
        store.subscribe(() => {
            console.log("Store changed ", store.getState())
        })

        store.dispatch(getTeamPlayers(344))
        store.dispatch(getTeamPlayers(344))
        store.dispatch(getTeam(16))

    }
  render() {
      return (
      <div>

      </div>
    );
  }
}

export default App;
