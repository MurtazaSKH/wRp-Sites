import React from 'react';
import {Link} from 'react-router-dom';

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

    this.setState({
      error:'Something went wrong!'
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
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="Email" placeholder="Email"/>
          <input type="password" name="pass" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
    <Link to="/">Go to Login </Link>
  </div>);
  }
}
