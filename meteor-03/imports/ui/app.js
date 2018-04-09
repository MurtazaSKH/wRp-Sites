import React from 'react';
import Titlebar from './titlebar';
import AddPlayer from './addplayer';
import PlayerList from './playerlist';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render () {
    return <div>
      <Titlebar title={this.props.title} subtitle='Text'/>
      {/* {renderPlayers(players)} */}
      <PlayerList players={this.props.players}/>
      <AddPlayer/>
    </div>;
  }
};


App.Proptypes = {
title : PropTypes.string.isRequired,
players : PropTypes.array.isRequired
};
