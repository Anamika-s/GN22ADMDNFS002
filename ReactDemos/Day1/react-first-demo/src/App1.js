import React, {
   Component } from 'react'
import './App1.css'
import AuthButton from './AuthButton'
export default class App1 extends Component {
  constructor(props)
  {
    super(props)
this.state=
{
  isLoggedIn : false
}
  }
  render() {
    let {isLoggedIn} =  this.state;
    // let AuthButton2;
    // if(isLoggedIn)
    // AuthButton2 = <button> Login </button>
    // else 
    // AuthButton2 = <button> Logout </button>
    
    // const renderButton =()=>
    // {
    //   if(isLoggedIn)
    //   return <button> Login </button>
    //   else 
    //   return <button> Logout </button> 

    // }

    return (
      <div> 
<h1> Demo for showing conditional rendering</h1>
{/* <button> Login </button>
<button> Logout </button> */}
{/* {renderButton()} */}
{/* <AuthButton isLoggedIn={this.state.isLoggedIn}/> */}
{/* {AuthButton2} */}
{/* {isLoggedIn ? <button> Login </button> : <button> Logout </button>} */}

{isLoggedIn && <button> Login </button>}
{!isLoggedIn && <button> Logout </button>}



      </div>
    
   )
  }
}
