import React, { Component } from 'react'

export default class UnControlledCom extends Component {
  constructor(props)
  {
    super(props)
    this.no1 = React.createRef();
    this.no2 = React.createRef();
    this.res = React.createRef();
  }
  handle = (e)=>
    {
      e.preventDefault();
      console.log(this.no1.current.value)
      // console.log(this.no2)
      // console.log(this.res)
      this.res.current.value=
      Number(this.no1.current.value)+ Number(this.no2.current.value)
      
      console.log("Form submitted");

    }
  render() {
    
    return (
      <div>UnControlledCom
   <form onSubmit={this.handle}>
     <div>
       <label> Enter No1 </label>
       <input type="number" ref={this.no1}/>
     </div>

     <div>
       <label> Enter No2 </label>
       <input type="number" ref={this.no2}/>
     </div>

     <div>
       <label> Result </label>
       <input type="number" ref={this.res}/>
     </div>
     <button type="submit"> Add </button>
   </form>

      </div>

    )
  }
}
