import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{_id:1,name:'Stevie',score:85},{_id:2,name:'Salah',score:91}];

const renderPlayers= function (playerslist) {
  return playerslist.map(function(a){
    return <p key={a._id}>{a.name} has {a.score} point(s).</p>;
  });
}

Meteor.startup(function() {
  let title= "Score Settings";
  let jsx = (
    <div>
      {/*Commenting inside jsx*/}
      <h1>{title}</h1>
    <p>This is text from main.js client</p>
    {renderPlayers(players)}
  </div>);

  ReactDOM.render(jsx, document.getElementById('app'));
});
