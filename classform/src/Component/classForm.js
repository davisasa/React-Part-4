import React, { Component } from 'react'

export default class classForm extends Component {


  render() {
    return (
      <div style={{display:"flex"}}>

        <input placeholder='Enter your name'/>
        <input type="email" placeholder='Enter your email'/>
        <input type="submit"/>

      </div>
    )
  }
}
