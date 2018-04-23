import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login component loaded from file </p>
    <Link to="/signup">Go to Signup </Link>
  </div>);
  }
}
