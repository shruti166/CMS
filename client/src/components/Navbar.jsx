import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <div className="navbar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style = {{width: "100%"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Content Mangagement System</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
       
        <li className="nav-item">
          <Link to = "/login" className="nav-link " >Admin</Link>
        </li>
        <li className="nav-item">
          <Link to = "/register" className="nav-link " >New User</Link>
        </li>
        <li className="nav-item">
          <Link to = "/create" className="nav-link " >Create</Link>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
  </div>
}
