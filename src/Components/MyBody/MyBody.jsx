import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import Slider from '../Slider/Slider'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import Acordion from '../Acordin/Acordion'
const MyBody = () => {
  return (
    <>
        <NavBar/> 
        <Banner/>
        <Slider/>
        <Acordion/>
        <Location/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default MyBody
