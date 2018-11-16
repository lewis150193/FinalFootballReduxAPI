import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {reducer} from "./components/reducers";
import { getTeam } from "./components/actions";
import { persist, store } from "./components/store";
import thunk from "redux-thunk";


class App extends React.Component {
    componentWillMount() {
        //WHERE I AM TRYING TO ADD THE STORE.
    }

  render() {

      return (
      <div>

      </div>
    );
  }
}

export default App;

/**
 * store.subscribe(() => {
            console.log("Store changed ", store.getState())
        });

 const store = createStore(reducer)
 store.subscribe(() => {
            console.log("Store changed ", store.getState())
        })

 store.dispatch(getTeamPlayers(344))
 store.dispatch(getTeamPlayers(344))
 store.dispatch(getTeam(16))

 */