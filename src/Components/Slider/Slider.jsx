import React from 'react'
import { useEffect } from 'react'
import '../Slider/Slider.css'
const Slider = () => {
    useEffect(()=>{
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:8,
            touchDrag:true,
            autoplaySpeed:1000,
            autoplay:true,
            // nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })
    },[])
  return (
    <>
   <section id='slider' className='mt-5'>
   <div className='container'>
        <h1 className='text-center mt-2 mb-5'>Our Work Beauty</h1>
        <div className='main d-flex justify-content-center'>
            <div className="owl-carousel owl-theme">
            <div className="item">
                <div className='image'>
                    <img src="images/sl1.jpg" alt="not found" />
                </div>
            </div>
            <div className="item">
                <div className='image'>
                    <img src="images/t2.jpg" alt="not found" />
                </div>
            </div>
            <div className="item">
                <div className='image'>
                    <img src="images/t3.jpg" alt="not found" />
                </div>
            </div>
        </div>
            </div>
        </div>
   </section>
    </>
  )
}

export default Slider
