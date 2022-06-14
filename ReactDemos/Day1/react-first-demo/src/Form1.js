import React, { Component } from 'react'

export default class Form1 extends Component {
   
  constructor()
  {
    super()
    this.state=
    {
       name:"",
       address:""
    }
  }
  // handle1 = (event)=>
  // {
  //   console.log(event.target.value)
  //   this.setState({name:event.target.value})

  // }
  // handle2 = (event)=>
  // {
  //   console.log(event.target.value)
  //   this.setState({address:event.target.value})

  // }
  handle = (event)=>
  {
    console.log(event.target.value)
    this.setState({[event.target.name]:event.target.value})
  }
   
  handleSubmit = (event)=>
{
  event.preventDefault(); 
  console.log(this.state);
}
   

  render() {
    return (
      <div> 
<form onSubmit={this.handleSubmit}>
  <div>
    <label> Enter Name </label>
    <input type="text" name="name" value={this.state.name} onChange={this.handle}/>

    </div>
  <div>
    <label> Enter Address </label>
    <input type="text" name="address" value={this.state.address} onChange={this.handle}/>
    
    </div>
     
     <button type="submit"> Add  </button>
  </form>

      </div>
    )
  }
}
