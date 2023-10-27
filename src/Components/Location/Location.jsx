import React from 'react'
import '../Location/Location.css'
const Location = () => {
  return (
    <div>
        <section id='location' className='mt-5 mb-5'>
            <div className='container'>
                <h1 className='text-center mt-2 mb-5'>Our Location & Services</h1>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                        <h2>Serving California and Las Vegas, Nevada with Excellence</h2>
                        <p>We are your trusted partner for all your trucking needs, proudly 
                            serving the vibrant regions of California and the bustling city of Las Vegas, Nevada.
                            <strong style={{display:'block'}}>Our services :</strong>Our Services 
                            Dry Van, Refrigerated,  
                            Logistics, Dedicated, Intermodal
                            </p>
                          </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4'>
                        <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52805896.53512097!2d-161.45637340731136!3d36.1174643882132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sjp!4v1698303694288!5m2!1sen!2sjp" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Location
