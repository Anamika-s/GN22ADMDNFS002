import React, { Component } from 'react'

export default class classComp extends Component {
  render() {
    return (
      <h1> Hello from Class Component
        Hello {this.props.name} </h1>
    );
  }
}
