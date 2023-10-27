import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    const phoneNumber = '562-350-5119';

  return (
    <>
     <section id='footer' className='mt-5'> 
        <div className='container'>
            <div className='image'>
                <img src="images/logoblack.jpg" alt="not found" />
            </div>
            <p className='mt-3'>At <strong>RAj CARRIERS</strong>, we're more than just a trucking service – we're your partners in transportation.
                 Our dedication to safety, reliability, and timely deliveries is the driving force behind our success.</p>
            <div className='social_media'>
                <ul className='list_one'>
                    <li>
                        <Link to={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                    </li>
                    <li>
                    <Link to="https://www.instagram.com/rajcarriers/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://www.facebook.com/profile.php?id=61552565832399" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                    </Link>  
                    </li>
                    <li>
                    <Link to="https://twitter.com/rajcarriers" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                    </Link>
                    </li>
                   <li>
                   <Link to="https://www.tiktok.com/@raj_carriers?lang=en" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-tiktok"></i>
                    </Link>
                   </li>
                    <li>
                    <Link to="https://www.youtube.com/@RAJ_CarriersLLC" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                    </Link>
                    </li>
                </ul>
            </div>

            <div className='row justify-content-between'>
                <div className='col-4'>
                    <div className='footer_content'>
                        <h6><small>Area Service :<strong style={{display:'block'}}> Center 2 at Valley
                            2298 E Vegas Valley Dr, Las Vegas, NV 89169, United States
                        </strong></small>
                        Pricing delayed by 20 minutes.
                        </h6>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='copy_right'>
                    <h6 style={{marginBottom:"0px"}}>Copyright © 2023 Trucking Transportation Company All rights reserved</h6>
                    </div>
                </div>
            </div>
        </div>
     </section> 
    </>
  )
}

export default Footer
