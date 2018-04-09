import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types'

export default class Player extends React.Component {
  render () {
    // return (<p>
    //   test
    // </p>);
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} is #{this.props.player.number}.
        <button onClick={()=>{
          Players.update({_id:this.props.player._id},{$inc: {number:1}});
        }}>+1</button>
        <button onClick={()=>{
          Players.update({_id:this.props.player._id},{$inc: {number:-1}});
        }}>-1</button>
        <button onClick={()=>{
          Players.remove({_id:this.props.player._id});
        }}>X</button>
    </p>);
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};
