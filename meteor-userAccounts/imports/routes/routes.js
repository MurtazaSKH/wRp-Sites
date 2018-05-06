import {Meteor} from 'meteor/meteor';
import React from 'react';
// import ReactDom from 'react-dom';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


import SignUp from '../ui/signup';
import Link from '../ui/link';
import NotFound from '../ui/notfound';
import Login from '../ui/login';

const browserHistory = createHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange=(isAuthenticated)=>{
  const pathname = browserHistory.location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

  if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.push('/');
  } else if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.push('/links');
  }
  console.log('isAuthenticated', isAuthenticated);
}

export const routes = (<Router history={browserHistory}>
  <div>
    <Switch>
      <Route exact path="/"  render={() => {
          return Meteor.userId()?<Redirect to="/links"/>: <Login/>
        }}/>
      <Route path="/signup" render={()=> {
          return Meteor.userId()?<Redirect to="/links"/>:<SignUp/>
        }}/>
      <Route path="/links" render={()=> {
          return !Meteor.userId()?<Redirect to="/"/>:<Link/>
        }}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
</Router>);
