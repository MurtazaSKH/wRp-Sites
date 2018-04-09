import React from 'react';
import Player from './player';
import PropTypes from 'prop-types';

// const renderPlayers = (playerslist)=> {
//   return playerslist.map(function(a) {
//     return <Player key={a._id} player={a}/>;
//   });
// }

export default class PlayerList extends React.Component {
  renderPlayers () {
    if(this.props.players.length===0){
      return <p>Add Players to get started!</p>
    } else {
      return this.props.players.map((a) => {
        return <Player key={a._id} player={a}/>;
      });
    }
  }
  render (){
    return <div>{this.renderPlayers()}</div>
  };
}

PlayerList.propTypes = {
  players : PropTypes.array.isRequired
};
