import React from 'react'
import '../Cards/Cards.css'
const Cards = () => {
  return (
    <>
      <section>
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mt-5 mb-5'>Our Quality Work</h1>
                <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <div className="card mb-2">
                        <img src="images/cd2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Professional Trucking Services</h5>
                            <p className="card-text">We provide top-notch trucking services tailored to your cargo needs. Whether you require local or long-distance transportation, count on us for professionalism and punctuality</p>
                            </div>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <div className="card mb-2">
                        <img src="images/cd3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fleet of Modern Trucks</h5>
                            <p className="card-text">Our modern fleet of trucks is equipped with cutting-edge technology, ensuring the safe and secure transportation of your goods. We prioritize vehicle maintenance and adhere to industry standards</p>
                            </div>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <div className="card mb-2">
                        <img src="images/cd1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Experienced Team You Can Trust</h5>
                            <p className="card-text">Our team of experienced drivers and logistics experts is dedicated to your success. We handle your cargo with care, delivering peace of mind with every shipment</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cards
