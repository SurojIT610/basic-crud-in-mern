import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav active">
        <Link className="nav-link active" aria-current="page" to="/">Home/ Sign Up</Link>
        <Link className="nav-link" to="/all">Show All</Link>
        <Link className="nav-link" to="/showme">Show Me</Link>
        <Link className="nav-link" to="/update">Update</Link>
        <Link className="nav-link" to="/delete">Delete</Link>
  
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar