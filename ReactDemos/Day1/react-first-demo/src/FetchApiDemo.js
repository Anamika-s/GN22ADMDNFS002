import React, { Component } from 'react'
export default class FetchApiDemo extends Component {
  constructor()
  {
    super()
  this.state=
  {
    users :null 
  }
  }  
  componentDidMount()
  {
   fetch('https://reqres.in/api/users').then((response)=>
   {
     response.json().then((result)=>
     {
       console.log(result.data)
       this.setState({users:result.data})
     })
    } )

  }
  render() {
    return (
      <div>
        <h1> List of Users </h1>
        {
          this.state.users ?
          this.state.users.map((item, i)=>
           <div> <p> {i}  {item.first_name}  {item.last_name} {item.email} </p>  </div>
          )
          
          : <h2> No Users </h2>
        
        }

        </div>
    )
  }
}
   