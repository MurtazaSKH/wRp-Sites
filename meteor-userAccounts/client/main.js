import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import SignUp from './../imports/ui/signup';
import Link from './../imports/ui/link';
import NotFound from './../imports/ui/notfound';
import Login from './../imports/ui/login';

const browserHistory = createHistory();

const routes = (
  <Router history={browserHistory}>
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/links" component={Link}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

Meteor.startup(()=> {
  ReactDom.render(routes,document.getElementById('app'));
});
