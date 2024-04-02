import React, { Component } from 'react'
import './App.css'

export default class classForm extends Component {

  constructor (){
    super();

    this.state = {
        name: "",
        email: "",
        password:"",
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  };
  

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div className='App'>
        

        <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column",width:"40%"}}>
          <input placeholder='Enter your name' value={this.state.name} onChange={this.handleNameChange}/>
          <input type="email" placeholder='Enter your email' value={this.state.email} onChange={this.handleEmailChange}/>
          <input type="password" placeholder='Enter your password' value={this.state.password} onChange={this.handlePasswordChange}/>
          <input type="submit"/>
        </form>

      </div>
    )
  }
}
