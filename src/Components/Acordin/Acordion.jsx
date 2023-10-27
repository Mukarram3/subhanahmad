import React from 'react'
const Acordion = () => {
  return (
    <>
     <section id='acordio_faq' className='mt-5 mb-5'>
      <div className='container'>
        <h1 className='text-center mb-4 mt-5'>FAQs – Frequently Asked Questions</h1>
      <div className="accordion"  id="accordionExample">
  <div className="accordion-item bg-dark" style={{color:"white"}}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What are our services?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Services : Dry Van, Refrigerated, </strong>   
        Logistics, Dedicated, Intermodal.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-dark" style={{color:"white"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Which thing makes our business unique?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We offer Fast quick delivery</strong> years of experience.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-dark" style={{color:"white"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where is our office location?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The office is based out of 
        Long Beach, CA</strong> 404 E. 1st Stressed Unit#618
        Long Beach, CA 90802.
      </div>
    </div>
  </div>
</div>
      </div>
     </section>
    </>
  )
}

export default Acordion
