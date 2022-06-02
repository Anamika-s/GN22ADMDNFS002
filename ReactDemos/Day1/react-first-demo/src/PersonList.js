import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log("aaaaa");
    axios.get(`http://localhost:3002/data`)
      .then(res => {
    console.log("aa");
    console.log(res.data);
        this.setState({ persons:res.data });
      }).catch((res)=>
      {
        console.log("error")
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              
               <li> {person.first_name} {person.last_name} </li>
              
            )
            }
      </ul>
            
    )
  }
}