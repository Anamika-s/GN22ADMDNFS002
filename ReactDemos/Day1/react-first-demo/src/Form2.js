import React from 'react';
import {useState} from "react";

export default function  () {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  
  
 const handleSubmit = (event)=>
{
  event.preventDefault(); 
  
const user ={
  name :  name,
  address:address
}
console.log(user)
}

 

   
  // this.setState({[event.target.name]:event.target.value})
//}
 
     return (
        <div> 
  <form onSubmit={handleSubmit}>
    <div>
      <label> Enter Name </label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  
      </div>
     <div>
      <label> Enter Address </label>
      <input type="text" name="address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
       </div>  
      
       
       <button type="submit"> Add  </button>
    </form>
  </div>
  );

}