import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {routes,onAuthChange} from '../imports/routes/routes';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});


Meteor.startup(() => {
  // Meteor.call('addNumbers',2,3, (err,res)=> {
  //   console.log('Add Number:',err,res);
  // });
  ReactDom.render(routes, document.getElementById('app'));
});
