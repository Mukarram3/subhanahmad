import React from 'react'
import '../Banner/Banner.css'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate = useNavigate("");
    const handleContact = ()=>{
        navigate('/contact');
    }
  return (
    <>
     <section id="banner">
        <div className="table_div">
          <div className="table_cell">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-8">
                  <h2>Your Road to </h2>
                  <h1>Dependable Trucking Solutions</h1>
                  <p className='mt-3 mb-3'>
                  Welcome to <strong>RAJ CARRIERS</strong>, your trusted partner for seamless transportation services. 
                  Our mission is to deliver excellence on every mile. With a modern fleet, experienced drivers, and a commitment to punctuality, we stand ready to meet your cargo transportation needs.

                  </p>
                  <div className="d-flex">
                    <button className="myBtn myBtnBlack" onClick={handleContact}>Contact info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
