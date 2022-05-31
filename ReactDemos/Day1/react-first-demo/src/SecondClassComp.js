import React, { Component } from 'react'

export default class SecondClassComp extends Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
      name:"Deepak",
      age : 24
    }
  }
  render() {
    return (
      <div>
      <h1> Name is  {this.state.name} </h1>
      <h3> Age is {this.state.age} </h3>
      </div>
    )
  }
}
