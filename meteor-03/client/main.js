import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/app'


// Printing hardcoded players
// const players = [{_id:1,name:'Stevie',score:85},{_id:2,name:'Salah',score:91}];

// Tracker.autorun(function(){
//   console.log('Players',Players.find().fetch());
// });





Meteor.startup(() => {

  Tracker.autorun(()=> {
    let players = Players.find({},{sort: {number:-1}}).fetch();
    let title = "Score Keeper";
    let jsx = (<div>
      {/* Commenting inside jsx */}
    </div>);

    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
  });
  //   Players.insert(
  // {
  //   name: 'Dijk',
  //   number:4
  // });
});
