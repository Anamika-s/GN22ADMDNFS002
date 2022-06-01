import React, { Component } from 'react'

export default class Mapdemo2 extends Component {
  state = 
  {
    users:[
      {id:1, name:"Ajay", marks:90},
      {id:2, name:"Vijay", marks:97},
      {id:3, name:"Deepak", marks:87},
      {id:4, name:"Sagar", marks:86}

    ]
  }
  render() {
    const users = this.state.users.map(user=>
    {
    return (
     <> 
     {user.id} {user.name} <br></br>
     </>
    )
  })
  return <div> {users} </div>
  }
}

