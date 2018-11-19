import React from 'react';
import Player from "./components/Player";

class App extends React.Component {
  render() {
      return (
      <div>
        <Player />
      </div>
    );
  }
}

export default App;


/**
 const store = createStore(reducer, applyMiddleware(thunk))
 store.subscribe(() => {
            console.log("Store changed ", store.getState()
            )
            this.setState({players: store.getState()})
            console.log(this.state.players)


        });
 store.dispatch(getTeam(3))

 */