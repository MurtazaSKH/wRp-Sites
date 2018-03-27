import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

// Printing hardcoded players
// const players = [{_id:1,name:'Stevie',score:85},{_id:2,name:'Salah',score:91}];

// Tracker.autorun(function(){
//   console.log('Players',Players.find().fetch());
// });

const renderPlayers = (playerslist)=> {
  return playerslist.map(function(a) {
    return (
      <p key={a._id}>
        {a.name} is #{a.number}.
        <button onClick={()=>{
          Players.update({_id:a._id},{$inc: {number:1}});
        }}>+1</button>
        <button onClick={()=>{
          Players.update({_id:a._id},{$inc: {number:-1}});
        }}>-1</button>
        <button onClick={()=>{
          Players.remove({_id:a._id});
        }}>X</button>
    </p>);
  });
}
const handleSubmit = (e)=> {
  e.preventDefault();
  let playerName = e.target.playerName.value;
  // let number = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({name: playerName, number: 0});
  }

}

Meteor.startup(() => {

  Tracker.autorun(()=> {
    let players = Players.find().fetch();
    let title = "Score Settings";
    let jsx = (<div>
      {/* Commenting inside jsx */}
      <h1>{title}</h1>
      <p>This is text from main.js client</p>
      {renderPlayers(players)}
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name"/>
        <button>Add Player</button>
      </form>
    </div>);

    ReactDOM.render(jsx, document.getElementById('app'));
  });
  //   Players.insert(
  // {
  //   name: 'Dijk',
  //   number:4
  // });
});
