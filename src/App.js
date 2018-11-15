import React, { Component } from 'react';
import {createStore} from 'redux'
import {reducer} from "./components/reducers";
import {getTeamPlayers} from "./components/actions";

class App extends Component {
  render() {
      const store = createStore(reducer)


      store.subscribe(() => {
          console.log("Store changed ", store.getState())
      })

      store.dispatch(getTeamPlayers(344))
      store.dispatch(getTeamPlayers(344))
      store.dispatch(getTeam(16))








      return (
      <div>

      </div>
    );
  }
}

export default App;
