import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {reducer} from "./components/reducers";
import { getTeam } from "./components/actions";
//import { persist, store } from "./components/store";
import thunk from "redux-thunk";
//import { connect } from 'react-redux';

class App extends React.Component {
    componentWillMount() {
        const store = createStore(reducer, applyMiddleware(thunk))
        store.subscribe(() => {
            console.log("Store changed ", store.getState())
        });
         store.dispatch(getTeam(2))

    };




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