import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class SignUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count:0,
      error:''
    };
  }
  increment (){
    this.setState({
      count:this.state.count+1
    });
  }
  decrement (){
    this.setState({
      count:this.state.count-1
    });
  }
  onSubmit(e) {
    e.preventDefault();
    //
    // this.setState({
    //   error:'Something went wrong!'
    // })
    let email=this.refs.email.value.trim();
    let password=this.refs.password.value.trim();

    Accounts.createUser({email,password},(err)=>{
      console.log('Signup Callback',err);
      if(err){
        this.setState({error:err.reason});
      }else {
        this.setState({error:''});
      }
    })
  }
  render() {
    return (
      <div>
        <p>Signup component loaded from file </p>
        <p>{this.state.error?this.state.error:undefined}</p>
        {/* <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button> */}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="Email" placeholder="Email"/>
          <input type="password" ref="password" name="pass" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
    <Link to="/">Go to Login </Link>
  </div>);
  }
}
