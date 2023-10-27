import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  const scrollToSection = (secId)=>{
    const section = document.getElementById(secId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  }
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className='image' id='logo'>
              <img src="images/logoblack.jpg" alt="not found" />
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"            
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={()=>{scrollToSection('acordio_faq')}} style={{cursor:'pointer'}}> 
                  Services
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={()=>{scrollToSection('slider')}} style={{cursor:'pointer'}}>
                  Our Beauty
                </span>
              </li>
              <li className="nav-item" style={{fontSize:"20px"}}>
                <NavLink className="nav-link" to="mailto:Kemetiam@yahoo.com">
                <i className="fa-solid fa-envelope"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
