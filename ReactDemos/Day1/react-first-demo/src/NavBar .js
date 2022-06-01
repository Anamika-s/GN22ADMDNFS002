import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar   extends Component {
  render() {
    return (
      <>   
      
      <nav className="navbar navbar-default">
  <div className="container-fluid">
     
    <ul className="nav navbar-nav">
      <li className="active"><Link to="#">Home</Link></li>
      <li><a href="/first">First Component</a></li>
      <li><Link to="/student">Stduent Component</Link></li>
      <li><a href="second">Second Component</a></li>
    </ul>
  </div>
</nav>

      
      </>
    )
  }
}
