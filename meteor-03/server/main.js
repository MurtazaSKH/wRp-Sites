import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() =>{
//   Players.insert(
// {
//   name: 'Milner',
//   number:7
// });
  // console.log(Players.find().fetch());
  let numbers = [9,99,4,56];
  let newNumbers= numbers.map((number) => number+1);
  console.log(newNumbers);
});
