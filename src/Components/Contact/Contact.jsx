import React from 'react'
import '../Contact/Contact.css'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <div className='container'>
      <div id='main'> 
        <h1 className='text-center' style={{fontWeight:'bolder'}}>Welcome</h1> 
          <h1 className='text-center'> <i className="fa-regular fa-address-card"></i> Contact us :562-350-5119</h1>
          <h1 className='text-center d-flex justify-content-center align-items-center' style={{marginBottom:"0px"}}>
            <NavLink className="nav-link" to="mailto:Kemetiam@yahoo.com">
            <i className="fa-solid fa-envelope"></i>
            </NavLink>Kemetiam@yahoo.com</h1>
            <button>
            <NavLink  style={{color:"white",padding:"2px 8px"}} className="nav-link" aria-current="page" to="/">
                  Go Back
            </NavLink>
            </button>
        </div>
      </div> 
    </>
  )
}

export default Contact
