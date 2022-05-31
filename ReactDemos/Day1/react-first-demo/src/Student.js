import React,{Component} from "react";

class Student extends Component
{
  render()
  {
    return (
      <>
      <h1> Student Details </h1>
      <h2> Name : {this.props.name} <br/>
      Batch : {this.props.batch} <br/>
      Marks : {this.props.marks}<br/>
      
      </h2>

      </>
    )
  }
}

export default  Student;