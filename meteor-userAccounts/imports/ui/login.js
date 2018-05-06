import React from 'react';
import {Link} from 'react-router-dom';
import {Metoer} from 'meteor/meteor';

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count:0,
      error:''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    //
    // this.setState({
    //   error:'Something went wrong!'
    // })
    let email=this.refs.email.value.trim();
    let password=this.refs.password.value.trim();

    Meteor.loginWithPassword({email},password,(err)=>{
      console.log('Login callback:',err);
      if(err){
        this.setState({error:"Unable to login, check email and passowrd"});
      }else {
        this.setState({error:''});
      }
    });
  }
  render() {
    return (
      <div>
        <p>Login component loaded from file </p>
        <p>{this.state.error?this.state.error:undefined}</p>
        {/* <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button> */}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="Email" placeholder="Email"/>
          <input type="password" ref="password" name="pass" placeholder="Password"/>
          <button>Login</button>
        </form>
    <Link to="/signup">Go to Signup </Link>
  </div>);
  }
}
