import React,{Component} from "react";

class StudentWithState extends Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      name:"",
      batch:this.props.batch,
      marks:0
    }

  }
  // function handleChange()
  // {

  // }
  handleChange = (event) =>
  {
    // console.log(event.target.value);
this.setState({name: event.target.value})
// console.log(this.state.name)
  }
  render()
  {
    return (
      <>
      <h1> Student Details </h1>
      <h2> Name : {this.state.name} <br/>
      Batch : {this.state.batch} <br/>
      Marks : {this.state.marks}<br/>
      
     <input type="text" value={this.state.name}
     onChange={this.handleChange}></input>
      </h2>

      </>
    )
  }
}

export default  StudentWithState;