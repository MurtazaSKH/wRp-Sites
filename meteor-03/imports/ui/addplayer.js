import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let playerName = e.target.playerName.value;
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({name: playerName, number: 0});
    }

  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name"/>
        <button>Add Player</button>
      </form>
    </div>);
  }
}
