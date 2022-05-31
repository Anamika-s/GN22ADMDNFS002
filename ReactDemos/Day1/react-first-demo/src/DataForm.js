import React, { Component } from 'react'

export default class DataForm extends Component {
 constructor(props)
 {
   super(props)
   this.state=
   {
      no1:0,
      no2:0,
      res:0
   }
}

handle = (event)=>
{
  this.setState({[event.target.name] : event.target.value})
  
     
  
}
//  handle1 = (e)=>
//  {
//    console.log(e.target.value)
// this.setState({no1: e.target.value})
//   }

 
//  handle2 = (e)=>
//  {
//    console.log(e.target.value)
   
// this.setState({no2: e.target.value})
//  }
 handleAll = (e)=>
 {
  e.preventDefault();
  console.log(`No1 is ${this.state.no1}
  No2 is ${this.state.no2}
  `)
  this.setState({res:Number(this.state.no1) +  Number(this.state.no2)})
  console.log("FOrm is submiited");
 }

  render() {
    return (
      <div> Add Numbrers
    <form onSubmit={this.handleAll}>
      <div>
      <label> Enter No 1</label>
      <input type="number" name="no1" value={this.state.no1} onChange={this.handle} />
      </div>

      <div>
      <label> Enter No 2</label>
      <input type="number" name="no2" value={this.state.no2} onChange={this.handle}/>
      </div>

      
      <div>
      <label> Result </label>
      <input type="number" name="res" value={this.state.res}/>
      </div>
<button type='submit'> Add </button>
    </form>


      </div>
    )

 }
}
